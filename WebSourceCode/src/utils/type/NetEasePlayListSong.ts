/*
 * # Copyright (c) 2023. HackerZer0, Inc. All Rights Reserved
 * # @作者         : HackerZer0(HackerZer0)
 * # @邮件         : HackerZer0@no.reply.github.com
 * # @文件         : 项目 [qqmusic] - NetEasePlayListSong.ts
 * # @修改时间    : 2023-03-20 01:47:11
 * # @上次修改    : 2023/3/20 上午1:47
 */

export interface NeteasePlayListSongs {
  code: number;
  list: NeteasePlayListSongsList[];
}

export interface NeteasePlayListSongsList {
  album: string;
  author: Author[];
  author_simple: string;
  mid: number;
  title: string;
  publishTime: number;

  fee: number;
  cloud: boolean;

  copyright: number;

  privileges: Privileges;
}

export interface Privileges {
  chargeInfoList: ChargeInfoList[];
  cp: number;
  cs: boolean;
  dl: number;
  dlLevel: string;
  downloadMaxBrLevel: string;
  downloadMaxbr: number;
  fee: number;
  fl: number;
  flLevel: string;
  flag: number;
  freeTrialPrivilege: FreeTrialPrivilege;
  id: number;
  maxBrLevel: string;
  maxbr: number;
  payed: number;
  pl: number;
  plLevel: string;
  playMaxBrLevel: string;
  playMaxbr: number;
  preSell: boolean;
  rscl: any;
  sp: number;
  st: number;
  subp: number;
  toast: boolean;
}

export interface ChargeInfoList {
  chargeMessage: any;
  chargeType: number;
  chargeUrl: any;
  rate: number;
}

export interface FreeTrialPrivilege {
  listenType: any;
  resConsumable: boolean;
  userConsumable: boolean;
}

export interface Author {
  alias: any[];
  id: number;
  name: string;
  tns: any[];
}
