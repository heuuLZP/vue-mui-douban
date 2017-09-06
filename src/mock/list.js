import Mock from 'mockjs'
import API from '../common/api/index'

Mock.mock(API.List.list, {
  'list|20': [{
    'id|+1': 1,
    'bookname': '@ctitle',
    'author': '@cname',
    'info': '@cparagraph',
    'image': '@image("200x250", "#ffcccc")'
  }]
})
