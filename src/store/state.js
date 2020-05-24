const state = {
  singer: {}, //歌手页面数据
  playing: false, //当前是否播放
  fullScreen: false, //当前是否全屏播放
  playList: [], //播放列表
  sequenceList: [], //顺序播放列表
  currentIndex: -1, //当前歌曲页码
  playMode: "sequence" //默认播放模式为顺序播放
};

export default state;
