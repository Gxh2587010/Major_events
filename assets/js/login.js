$(function () {
  $('#go2Rge').on('click', function () {
    $('.login-wrap').hide()
    $('.reg-wrap').show()
  })

  $('#go2Login').on('click', function () {
    $('.login-wrap').show()
    $('.reg-wrap').hide()
  })

  let form = layui.form
  let layer = layui.layer
  

  form.verify({
    pwd: [
      /^[\S]{6,12}$/
      , '密码必须6到12位，且不能出现空格'
    ],

    repwd: function (value) {
      var pwd = $('#passpord').val()
      if (pwd !== value) {
        return '两次输入的密码不一致'
      }
    }

  })
  // 优化代码
  const format2Json = (source) => {
    let target = {}
    source.split('&').forEach(el => {
      let kv = el.split('=')
      target[kv[0]] = kv[1]

    });
    return JSON.stringify(target)
  }





  $('#formReg').on('submit', function (e) {

    e.preventDefault()

    $.ajax({
      method: 'post',
      url: '/api/reg',
      data: $(this).serialize(),
      success(res) {
        if (res.code !== 200) {
          return layer.msg('注册成功');

          $('#go2Login')[0].click()
          // console.log("注册成功");
        }
      }
    })

  })

  $('#formLogin').on('submit', function (e) {
    e.preventDefault()
    $.ajax({
      method: 'post',
      url: '/api/login',

      // contentType: 'application/json',
      data: $(this).serialize(),
      success(res) {
        if (res.code !== 0) return layer.msg(res.message)

        localStorage.setItem('big_new_token', res.token)

        location.href = '/home.html'
      }

    })
  })
})