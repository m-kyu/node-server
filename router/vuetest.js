const vueRouter = require('express').Router();
const query = require('../lib/db');

vueRouter.get('/', async function (req, res) {
    const data = await query.queryExecute('select * from member');
    res.send(data);
})

vueRouter.post('/insert', async function (req, res) {
    const {name,email} = req.body;
    const data = await query.queryExecute(`insert into member (name,email) values (?,?)`, [name,email])
    res.send(data);
})

vueRouter.put('/update', async function (req, res) {
  const {num, name,email} = req.body;
  const data = await query.queryExecute(`update member set name=?, email=? where num=?`, [name,email,num])
  res.send(data);
})

vueRouter.delete('/delete', async function (req, res) {
  const {num} = req.query;
  const data = await query.queryExecute(`delete from member where num=?`, [num])

  res.send(data);
})

vueRouter.get('/create', async function (req, res) {
  const q = `
    CREATE TABLE test.member (
      num INT NOT NULL AUTO_INCREMENT,
      name VARCHAR(20),
      email VARCHAR(100),
      PRIMARY KEY(num)
    )`;
  const data = await query.queryExecute(q, [])
  
  res.send('테이블 생성완료');
})


  module.exports = vueRouter;