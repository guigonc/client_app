module.exports = (function () {
  return {
    track: function(path) {
      var hash_identity = document.cookie.replace(/(?:(?:^|.*;\s*)hash_identity\s*\=\s*([^;]*).*$)|^.*$/, "$1");

      if (hash_identity.length == 0) document.cookie = 'hash_identity=' + Math.random().toString(36).substr(2) + ';expires=Fri, 31 Dec 9999 23:59:59 GMT'
      fetch((process.env.API_URL || 'https://contactracker.herokuapp.com') +'/page_views.json', {
        method: 'POST',
        body: JSON.stringify({ path, hash_identity }), headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } })

    }
  }
})()
