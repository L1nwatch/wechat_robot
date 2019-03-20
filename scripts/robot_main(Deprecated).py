#!/bin/env python3
# -*- coding: utf-8 -*-
# version: Python3.X
""" 自己用的微信机器人

主要是推送每天的股票信息到自己微信上

2019-03-20：由于微信封了 web 接口，wxpy 和 itchat 之类的都不能用了，改用 wechaty
"""
import itchat

__author__ = '__L1n__w@tch'

if __name__ == "__main__":
    itchat.login()
    itchat.send("Hello WeCHat!", toUserName="w@tch")
