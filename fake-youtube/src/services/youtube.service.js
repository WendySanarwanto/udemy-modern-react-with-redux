let ytSearch = require("youtube-api-search");

const API_KEY = 'AIzaSyBYnLPP6W4XLUBFQBoPBpGtMdyUHDtwveM';

class YoutubeService{
    doSearch(search, numResult){
        return new Promise((resolve, reject)=>{
            ytSearch({key: API_KEY, term: search}, (result, error)=>{
                if (error){
                    console.log(`[DEBUG-YoutubeService] - error:`);
                    console.log(error);
                    reject(error);
                }
                else{
                    console.log(`[DEBUG-YoutubeService] - result:`);
                    console.log(result);
                    resolve(result);
                }
            })            
        });
    }
}

export default YoutubeService;