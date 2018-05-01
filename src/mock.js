const Mock = require('mockjs')

const Random = Mock.Random

// 首页顶部Carousel数据
var carouselData = {
  code: '1000',
  message: '请求成功',
  result: [
    {
      id: Random.integer(1, 1000),
      image: '//fuss10.elemecdn.com/0/e7/64044fb6df771e9cb42196ae3eeeejpeg.jpeg'
    },
    {
      id: Random.integer(1, 1000),
      image: '//fuss10.elemecdn.com/b/0a/5b1ab540506687c7b93e148704db1jpeg.jpeg'
    }
  ]
}

// 首页食物数据
var foodList = {
  code: '1000',
  message: '请求成功',
  result: [
    {
      id: Random.integer(1, 1000),
      title: '喵叔米线',
      desc: '老坛酸菜米线1份',
      image: 'https://p0.meituan.net/200.0/deal/25e92e1c28ff73bed8067a1bebe2fdd879117.jpg@105_0_591_591a%7C267h_267w_2e_90Q',
      price: 10.8,
      sale_count: 18761,
      school: '重庆大学',
      area: '第一食堂',
      stall: Random.ctitle(3, 7)
    },
    {
      id: Random.integer(1, 1000),
      title: '莱得快',
      desc: '单人套餐， 提供免费wifi',
      image: 'https://p1.meituan.net/200.0/deal/70d8c60b6eb0faa1953d326eba5b8abc42719.jpg@115_0_400_400a%7C267h_267w_2e_90Q',
      price: 11.8,
      sale_count: 71610,
      school: '重庆大学',
      area: '第一食堂',
      stall: Random.ctitle(3, 7)
    },
    {
      id: Random.integer(1, 1000),
      title: '一只酸奶牛',
      desc: '酸奶紫米露3选1',
      image: 'https://p1.meituan.net/200.0/deal/ee167853ec9f0330b0d3d99cff3b0d8c86353.jpg@267h_267w_2e_90Q',
      price: 8.8,
      sale_count: 512128,
      school: '重庆大学',
      area: '第二食堂',
      stall: Random.ctitle(3, 7)
    },
    {
      id: Random.integer(1, 1000),
      title: '兄弟香辣虾',
      desc: '干锅虾2-3人餐',
      image: 'https://p1.meituan.net/200.0/deal/189acdf68e8db0f291752193fb5802b5120045.jpg',
      price: 98,
      sale_count: 13171,
      school: '重庆大学',
      area: '第三食堂',
      stall: Random.ctitle(3, 7)
    },
    {
      id: Random.integer(1, 1000),
      title: '宋记重庆鸡公煲',
      desc: '2人鸡公煲套餐， 提供免费wifi',
      image: 'https://p0.meituan.net/200.0/deal/b735364ce9740b0b0d59f1303838560f51596.jpg@126_0_388_388a%7C267h_267w_2e_100Q',
      price: 30.5,
      sale_count: 9863,
      school: '重庆大学',
      area: '第三食堂',
      stall: Random.ctitle(3, 7)
    },
    {
      id: Random.integer(1, 1000),
      title: '正新鸡排',
      desc: '正新鸡排尊享版单人餐',
      image: 'https://p0.meituan.net/200.0/deal/e5d21470df5ef34f92b77d83dd16c771153749.jpg@0_7_368_368a%7C267h_267w_2e_90Q',
      price: 9.5,
      sale_count: 18437977,
      school: '重庆大学',
      area: '第三食堂',
      stall: Random.ctitle(3, 7)
    }
  ]
}

// var foodDetailData ={
//   code: '1000',
//   message: '请求成功',
//   result: {
//     id: Random.integer(1, 1000),
//     title: '喵叔米线',
//     desc: '老坛酸菜米线1份',
//     image: '//p0.meituan.net/deal/25e92e1c28ff73bed8067a1bebe2fdd879117.jpg',
//     price: 10.8,
//     sale_count: 18761,
//     school: '重庆大学',
//     area: '第一食堂'
//   }
// }

// 用户信息
var userInfoData = {
  code: '1000',
  message: '请求成功',
  result: {
    avatar: Random.image(),
    name: Random.ctitle(3, 5),
    sex: Random.integer(0, 1),
    email: '3344963462@qq.com',
    identfic: true,
    stu_num: '20154302'
  }
}

// 大学列表信息
var schoolList = {
  code: '1000',
  message: '请求成功',
  result: [
    {
      name: '重庆大学',
      id: Random.integer(1, 1000)
    },
    {
      name: '北京大学',
      id: Random.integer(1, 1000)
    },
    {
      name: '清华大学',
      id: Random.integer(1, 1000)
    },
    {
      name: '武汉大学',
      id: Random.integer(1, 1000)
    },
    {
      name: '北京航空航天大学',
      id: Random.integer(1, 1000)
    }
  ]
}

var articleData = {
  code: '1000',
  message: '请求成功',
  result: [
    {
      id: 1,
      user_avatar: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
      user_name: Random.ctitle(2, 7),
      post_date: Random.date(),
      post_type: '美食攻略',
      summary: Random.cparagraph(),
      content_imgs: [
        'https://p0.meituan.net/200.0/deal/25e92e1c28ff73bed8067a1bebe2fdd879117.jpg@105_0_591_591a%7C267h_267w_2e_90Q',
        'https://p1.meituan.net/200.0/deal/70d8c60b6eb0faa1953d326eba5b8abc42719.jpg@115_0_400_400a%7C267h_267w_2e_90Q',
        'https://p1.meituan.net/200.0/deal/ee167853ec9f0330b0d3d99cff3b0d8c86353.jpg@267h_267w_2e_90Q',
        'https://p1.meituan.net/200.0/deal/189acdf68e8db0f291752193fb5802b5120045.jpg',
        'https://p0.meituan.net/200.0/deal/b735364ce9740b0b0d59f1303838560f51596.jpg@126_0_388_388a%7C267h_267w_2e_100Q',
        'https://p0.meituan.net/200.0/deal/e5d21470df5ef34f92b77d83dd16c771153749.jpg@0_7_368_368a%7C267h_267w_2e_90Q'
      ],
      rate: Random.integer(0, 100),
      comment_total: Random.integer(0, 1000)
    },
    {
      id: 2,
      user_avatar: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
      user_name: Random.ctitle(2, 7),
      post_date: Random.date(),
      post_type: '吐槽天地',
      summary: Random.cparagraph(),
      content_imgs: [
        'https://p0.meituan.net/200.0/deal/25e92e1c28ff73bed8067a1bebe2fdd879117.jpg@105_0_591_591a%7C267h_267w_2e_90Q',
        'https://p1.meituan.net/200.0/deal/70d8c60b6eb0faa1953d326eba5b8abc42719.jpg@115_0_400_400a%7C267h_267w_2e_90Q',
        'https://p1.meituan.net/200.0/deal/ee167853ec9f0330b0d3d99cff3b0d8c86353.jpg@267h_267w_2e_90Q',
        'https://p1.meituan.net/200.0/deal/189acdf68e8db0f291752193fb5802b5120045.jpg',
        'https://p0.meituan.net/200.0/deal/b735364ce9740b0b0d59f1303838560f51596.jpg@126_0_388_388a%7C267h_267w_2e_100Q',
        'https://p0.meituan.net/200.0/deal/e5d21470df5ef34f92b77d83dd16c771153749.jpg@0_7_368_368a%7C267h_267w_2e_90Q'
      ],
      rate: Random.integer(0, 100),
      comment_total: Random.integer(0, 1000)
    },
    {
      id: 3,
      user_avatar: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
      user_name: Random.ctitle(2, 7),
      post_date: Random.date(),
      post_type: '美食攻略',
      summary: Random.cparagraph(),
      content_imgs: [
        'https://p0.meituan.net/200.0/deal/25e92e1c28ff73bed8067a1bebe2fdd879117.jpg@105_0_591_591a%7C267h_267w_2e_90Q',
        'https://p1.meituan.net/200.0/deal/70d8c60b6eb0faa1953d326eba5b8abc42719.jpg@115_0_400_400a%7C267h_267w_2e_90Q',
        'https://p1.meituan.net/200.0/deal/ee167853ec9f0330b0d3d99cff3b0d8c86353.jpg@267h_267w_2e_90Q',
        'https://p1.meituan.net/200.0/deal/189acdf68e8db0f291752193fb5802b5120045.jpg',
        'https://p0.meituan.net/200.0/deal/b735364ce9740b0b0d59f1303838560f51596.jpg@126_0_388_388a%7C267h_267w_2e_100Q',
        'https://p0.meituan.net/200.0/deal/e5d21470df5ef34f92b77d83dd16c771153749.jpg@0_7_368_368a%7C267h_267w_2e_90Q'
      ],
      rate: Random.integer(0, 100),
      comment_total: Random.integer(0, 1000)
    }
  ]
}

var articleSameItemData = {
  code: '1000',
  message: '请求成功',
  result: [
    {
      id: 1,
      user_avatar: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
      user_name: Random.ctitle(2, 7),
      post_date: Random.date(),
      post_type: '美食攻略',
      summary: Random.cparagraph(),
      content_imgs: [
        'https://p0.meituan.net/200.0/deal/25e92e1c28ff73bed8067a1bebe2fdd879117.jpg@105_0_591_591a%7C267h_267w_2e_90Q',
        'https://p1.meituan.net/200.0/deal/70d8c60b6eb0faa1953d326eba5b8abc42719.jpg@115_0_400_400a%7C267h_267w_2e_90Q',
        'https://p1.meituan.net/200.0/deal/ee167853ec9f0330b0d3d99cff3b0d8c86353.jpg@267h_267w_2e_90Q',
        'https://p1.meituan.net/200.0/deal/189acdf68e8db0f291752193fb5802b5120045.jpg',
        'https://p0.meituan.net/200.0/deal/b735364ce9740b0b0d59f1303838560f51596.jpg@126_0_388_388a%7C267h_267w_2e_100Q',
        'https://p0.meituan.net/200.0/deal/e5d21470df5ef34f92b77d83dd16c771153749.jpg@0_7_368_368a%7C267h_267w_2e_90Q'
      ],
      rate: Random.integer(0, 100),
      comment_total: Random.integer(0, 1000)
    },
    {
      id: 2,
      user_avatar: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
      user_name: Random.ctitle(2, 7),
      post_date: Random.date(),
      post_type: '美食攻略',
      summary: Random.cparagraph(),
      content_imgs: [
        'https://p0.meituan.net/200.0/deal/25e92e1c28ff73bed8067a1bebe2fdd879117.jpg@105_0_591_591a%7C267h_267w_2e_90Q',
        'https://p1.meituan.net/200.0/deal/70d8c60b6eb0faa1953d326eba5b8abc42719.jpg@115_0_400_400a%7C267h_267w_2e_90Q',
        'https://p1.meituan.net/200.0/deal/ee167853ec9f0330b0d3d99cff3b0d8c86353.jpg@267h_267w_2e_90Q',
        'https://p1.meituan.net/200.0/deal/189acdf68e8db0f291752193fb5802b5120045.jpg',
        'https://p0.meituan.net/200.0/deal/b735364ce9740b0b0d59f1303838560f51596.jpg@126_0_388_388a%7C267h_267w_2e_100Q',
        'https://p0.meituan.net/200.0/deal/e5d21470df5ef34f92b77d83dd16c771153749.jpg@0_7_368_368a%7C267h_267w_2e_90Q'
      ],
      rate: Random.integer(0, 100),
      comment_total: Random.integer(0, 1000)
    },
    {
      id: 3,
      user_avatar: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
      user_name: Random.ctitle(2, 7),
      post_date: Random.date(),
      post_type: '美食攻略',
      summary: Random.cparagraph(),
      content_imgs: [
        'https://p0.meituan.net/200.0/deal/25e92e1c28ff73bed8067a1bebe2fdd879117.jpg@105_0_591_591a%7C267h_267w_2e_90Q',
        'https://p1.meituan.net/200.0/deal/70d8c60b6eb0faa1953d326eba5b8abc42719.jpg@115_0_400_400a%7C267h_267w_2e_90Q',
        'https://p1.meituan.net/200.0/deal/ee167853ec9f0330b0d3d99cff3b0d8c86353.jpg@267h_267w_2e_90Q',
        'https://p1.meituan.net/200.0/deal/189acdf68e8db0f291752193fb5802b5120045.jpg',
        'https://p0.meituan.net/200.0/deal/b735364ce9740b0b0d59f1303838560f51596.jpg@126_0_388_388a%7C267h_267w_2e_100Q',
        'https://p0.meituan.net/200.0/deal/e5d21470df5ef34f92b77d83dd16c771153749.jpg@0_7_368_368a%7C267h_267w_2e_90Q'
      ],
      rate: Random.integer(0, 100),
      comment_total: Random.integer(0, 1000)
    }
  ]
}

var commentData = [
  {
    id: 1,
    topic_id: 1,
    content: Random.ctitle(4, 15),
    from_user: {
      id: Random.integer(1, 100),
      avatar: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
      name: Random.ctitle(3, 5)
    },
    to_uid: 0,
    to_content: {
      id: Random.integer(1, 100),
      content: Random.ctitle(4, 15),
      user_info: {
        id: Random.integer(1, 100),
        name: Random.ctitle(3, 5)
      }
    }
  },
  {
    id: 2,
    topic_id: 1,
    content: Random.ctitle(4, 15),
    from_user: {
      id: Random.integer(1, 100),
      avatar: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
      name: Random.ctitle(3, 5)
    },
    to_uid: 0,
    to_content: {
      id: Random.integer(1, 100),
      content: Random.ctitle(4, 15),
      user_info: {
        id: Random.integer(1, 100),
        name: Random.ctitle(3, 5)
      }
    }
  },
  {
    id: 3,
    topic_id: 1,
    content: Random.ctitle(4, 15),
    from_user: {
      id: Random.integer(1, 100),
      avatar: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
      name: Random.ctitle(3, 5)
    },
    to_uid: 4,
    to_content: {
      id: Random.integer(1, 100),
      content: Random.ctitle(4, 15),
      user_info: {
        id: Random.integer(1, 100),
        name: Random.ctitle(3, 5)
      }
    }
  },
  {
    id: 4,
    topic_id: 1,
    content: Random.ctitle(4, 15),
    from_user: {
      id: Random.integer(1, 100),
      avatar: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
      name: Random.ctitle(3, 5)
    },
    to_uid: 5,
    to_content: {
      id: Random.integer(1, 100),
      content: Random.ctitle(4, 15),
      user_info: {
        id: Random.integer(1, 100),
        name: Random.ctitle(3, 5)
      }
    }
  },
  {
    id: 5,
    topic_id: 1,
    content: Random.ctitle(4, 15),
    from_user: {
      id: Random.integer(1, 100),
      avatar: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
      name: Random.ctitle(3, 5)
    },
    to_uid: 0,
    to_content: {
      id: Random.integer(1, 100),
      content: Random.ctitle(4, 15),
      user_info: {
        id: Random.integer(1, 100),
        name: Random.ctitle(3, 5)
      }
    }
  }
]

var articleDetail = {
  code: '1000',
  message: '请求成功',
  result: {
    id: 1,
    user_avatar: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
    user_name: Random.ctitle(2, 7),
    post_date: Random.date(),
    post_type: '美食攻略',
    summary: Random.cparagraph(),
    content: Random.cparagraph(20, 50),
    rate: Random.integer(0, 100),
    comment_total: Random.integer(0, 1000),
    comment: commentData
  }
}

var orderData = {
  code: '1000',
  message: '请求成功',
  result: [
    {
      id: 1,
      stall: Random.ctitle(3, 7),
      avatar: Random.image(),
      price: 29.56,
      content: '黑椒烤肉饭+卤蛋+冰红茶',
      status: Random.integer(-1, 1),
      date: Random.date()
    },
    {
      id: 2,
      stall: Random.ctitle(3, 7),
      avatar: Random.image(),
      price: 29.56,
      content: '黑椒烤肉饭+卤蛋+冰红茶',
      status: Random.integer(-1, 1),
      date: Random.date()
    },
    {
      id: 3,
      stall: Random.ctitle(3, 7),
      avatar: Random.image(),
      price: 29.56,
      content: '黑椒烤肉饭+卤蛋+冰红茶',
      status: Random.integer(-1, 1),
      date: Random.date()
    },
    {
      id: 4,
      stall: Random.ctitle(3, 7),
      avatar: Random.image(),
      price: 29.56,
      content: '黑椒烤肉饭+卤蛋+冰红茶',
      status: Random.integer(-1, 1),
      date: Random.date()
    },
    {
      id: 5,
      stall: Random.ctitle(3, 7),
      avatar: Random.image(),
      price: 29.56,
      content: '黑椒烤肉饭+卤蛋+冰红茶',
      status: Random.integer(-1, 1),
      date: Random.date()
    }
  ]
}

Mock.mock('/carousel/', 'get', carouselData)
Mock.mock('/index/foodlist/', 'get', foodList)
Mock.mock('/user/info/', 'get', userInfoData)
Mock.mock('/index/schoollist/', 'get', schoolList)
Mock.mock('/discover/article/list', 'get', articleData)
Mock.mock('/discover/article/samelist/', 'get', articleSameItemData)
Mock.mock('/discover/article/detail', 'get', articleDetail)
Mock.mock('/user/orders/', 'get', orderData)
