
function descCutter(desc)
{
  desc = desc.substring(0,100) + '...';
  return desc;
}

function youtubeParser(yt_response)
{  
  let responseArr = [];

  yt_response.items.forEach(element => {
    let response = {
      title: null,
      thumbnail: null,
      creator: null,
      uploadDate: null,
      description: null,
      video_url: null
    };
    response.title = element.snippet.title;
    response.thumbnail = element.snippet.thumbnails.high.url;
    response.creator = element.snippet.channelTitle;
    response.uploadDate = element.snippet.publishedAt;
    response.description = descCutter(element.snippet.description);
    response.video_url =`https://www.youtube.com/watch?v=${element.id.videoId}`;

    responseArr.push(response);
  });
  return responseArr;
}


function vimeoParser(vimeo_response)
{
  
  let responseArr = [];

  vimeo_response.data.forEach(element => {
    let response = {
      title: null,
      thumbnail: null,
      creator: null,
      uploadDate: null,
      description: null,
      video_url: null
    };

    response.title = element.name;
    response.thumbnail = element.pictures.sizes[2].link;
    response.creator = element.user.name;
    response.uploadDate = element.release_time;
    response.description = descCutter(element.description);
    response.video_url = element.link;
    responseArr.push(response);
  });

  return responseArr;
}

export const searchForVideos = async function(saerchTerm, siteBaseUrl){

    let response = null;
    let result = null;
    let responseArr = null;
    switch (siteBaseUrl)
    {

      case "youtube": 
        console.log(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=7&q=${saerchTerm}&key=${process.env.REACT_APP_YT_PUBLIC_KEY}`);
         response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=7&q=${saerchTerm}&key=${process.env.REACT_APP_YT_PUBLIC_KEY}`);
         result = await response.json();
         console.log(result);
        responseArr = youtubeParser(result);
        break;

      case "vimeo":
       response = await fetch(`https://api.vimeo.com/videos?&query=${saerchTerm}&page=1&per_page=7`, {
        method: 'get', 
        headers: new Headers({
          'Authorization': `bearer ${process.env.REACT_APP_VIMEO_PUBLIC_KEY}`
        })
      });
        result = await response.json();
       responseArr = vimeoParser(result);
        break;  

      default:
        responseArr = null;
    }

    return responseArr;
}