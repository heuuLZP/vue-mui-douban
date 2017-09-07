import Mock from 'mockjs'
import API from '../common/api/index'

Mock.mock(API.Detail.detail, {
  'id|+1': 1,
  'bookname': '@ctitle',
  'author': '@cname',
  'info': '@cparagraph',
  'image': '@image("200x250", "#ffcccc")',
  'page|1-100': 100,
  'date': '@date("yyyy-M-d")',
  'isbn': 9787513323369,
  'binding': '精装'
})
