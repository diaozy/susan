const API_BASE_N = 'https://www.cloud99.xyz/api';

/**
 * 获取最新日报
 * @returns {string}
 */
function getList(bookID) {
       return API_BASE_N+'/list/'+bookID;
}

function getBooks( ) {
  return API_BASE_N + '/books/';
}


module.exports = {
    getList: getList,
    getBooks:getBooks

};
