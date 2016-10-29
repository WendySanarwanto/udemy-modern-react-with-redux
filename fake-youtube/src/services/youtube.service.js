let ytSearch = require("youtube-api-search");
import _ from 'lodash'; 
class YoutubeService{
    constructor(){
        this.apiKey = 'AIzaSyBYnLPP6W4XLUBFQBoPBpGtMdyUHDtwveM';
    }

    doSearch(search, numResult){
        return new Promise((resolve, reject)=>{
            ytSearch({key: 'AIzaSyBYnLPP6W4XLUBFQBoPBpGtMdyUHDtwveM', term: search}, (result, error)=>{
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