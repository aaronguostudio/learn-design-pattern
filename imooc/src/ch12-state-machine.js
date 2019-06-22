import StateMachine from 'javascript-state-machine'

// 初始化状态机
export default new StateMachine({
  init: '收藏',
  transitions: [
    {
      name: 'doState',
      from: '收藏',
      to: '取消收藏'
    },
    {
      name: 'deleteStore',
      from: '取消收藏',
      to: '收藏'
    }
  ],
  methods: {
    onDoState: () => {
      console.log('收藏成功') // request backend server
    },
    onDeleteStore: () => {
      console.log('取消收藏成功') // request backend server
    }
  }
})
