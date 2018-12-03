// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
const goodslistData = function() {
    let articles = [];
    for (let i = 0; i < 15; i++) {
        let newArticleObject = {
            title: Random.cparagraph(1, 2),
            subtitle: Random.cparagraph(1, 3),
            sales_num:Random.integer(0, 10000),
            origin_price: Random.integer(1, 500),
            coupon_price: Random.integer(1, 300),
            is_tmall:Random.integer(0, 1),
            goods_id:Mock.mock('@float()'),
            image: Random.dataImage('150x150', '商品图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            quan_price:Random.integer(1, 200),
            date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
        }
        articles.push(newArticleObject)
    }
 
    return {
        data: articles
    }
}
 // mock 详情 数据
const detailData = function() {
    let newArticleObject = {
        title: Random.cparagraph(1, 2),
        subtitle: Random.cparagraph(1, 3),
        sales_num:Random.integer(0, 10000),
        origin_price: Random.integer(1, 500),
        coupon_price: Random.integer(1, 300),
        is_tmall:Random.integer(0, 1),
        goods_id:Mock.mock('@float()'),
        banner: [Random.dataImage('300x300', '商品图片'),Random.dataImage('300x300', '商品图片'),Random.dataImage('300x300', '商品图片'),Random.dataImage('300x300', '商品图片')], // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
        image_list: [Random.dataImage('150x150', '商品图片'),Random.dataImage('150x150', '商品图片'),Random.dataImage('150x150', '商品图片'),Random.dataImage('150x150', '商品图片')], // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
        quan_price:Random.integer(1, 200),
        date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    }
 
    return {
        data: newArticleObject
    }
}

const login = function() {
    let newArticleObject = {
        code: 1,
        data:{
            token: Random.guid(),
        }
    }
 
    return {
        data: newArticleObject
    }
}
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/index/goodslist', 'get', goodslistData);
Mock.mock('/index/goodsdetail', 'post', detailData);
Mock.mock('/index/login', 'post', login);