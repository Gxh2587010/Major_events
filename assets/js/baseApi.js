$.ajaxPrefilter(function (config) {

  const format2Json = (source) => {
    let target = {}
    source.split('&').foreach((el) => {
      let kv = el.split('=')
      target[kv[0]] = kv[1]
    })

    return JSON.stringify(target)
  }

  config.url = 'http://big-event-api-t.itheima.net' + config.url

  config.contentType = 'application/json'
  config.data = format2Json(config.data)
})