/*
 * # Copyright (c) 2023. HackerZer0, Inc. All Rights Reserved
 * # @作者         : HackerZer0(HackerZer0)
 * # @邮件         : HackerZer0@no.reply.github.com
 * # @文件         : 项目 [WebSourceCode] - NeteaseMusicPlayList.ts
 * # @修改时间    : 2023-03-05 05:28:10
 * # @上次修改    : 2023/3/5 下午5:28
 */

export interface MusicPlaylist {
  code: number;
  list: MusicPlayList2List[];
}

export interface MusicPlayList2List {
  coverImgUrl: string;
  id: number;
  name: string;
  trackCount: number;
  userId: number;
}
