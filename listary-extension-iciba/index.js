const axios = require("axios");

async function search(query) {
    const response = await axios({
        url: 'https://dict.iciba.com/dictionary/word/suggestion',
        params: {
            word: query,
            nums: '5',
            is_need_mean: '1',
        }
    });
    const json = response.data;
    // console.log(json);

    if (json.message) {
        return json.message.map(each=>{
            return {title:
                each.key + ' ' + each.means.map(
                    tran=>{
                        return tran.part + tran.means + ' ';
                    })
                }
            }
            );
    }
    else {
        return [{
            title: "No Result"
        }];
    }
}

module.exports = {
    search: search
};