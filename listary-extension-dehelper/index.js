const axios = require("axios");

async function search(query) {
    const response = await axios({
        url: 'https://www.godic.net/dicts/prefix/'+query,
    });
    const json = response.data;
    // console.log(json);
    if (json) {
        return json.map(each=>{
            return {title:
                each.value + ' ' + each.label
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
