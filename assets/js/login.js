$(function () {
  $('#go2Rge').on('click', function () {
    $('.login-wrap').hide()
    $('.reg-wrap').show()
  })

  $('#go2Login').on('click', function () {
    $('.login-wrap').show()
    $('.reg-wrap').hide()
  })

  var form = layui.form

  form.verify({
    pwd:[/^[\s]{6,12}$/,'密码必须6到12位,切不能出现空格']

  })
})