import { message } from '../message';
import { state } from '../state';
import { data } from '../data';
import { bookmark } from '../bookmark';

import { node } from '../../utility/node';
import { trimString } from '../../utility/trimString';
import { isValidString } from '../../utility/isValidString';

import './index.css';

export const RecentBookmarks = function() {
  
  this.element = {
    container: node('div|class:recent-bookmarks'),
    title: node('div|class:recent-bookmarks-title'),
    list: node('div|class:recent-bookmarks-list'),
    clear: node('button|class:recent-bookmarks-clear')
  };

  this.recent = [];
  this.maxItems = 8; // 增加默认显示的标签数量
  this.showTimestamp = false; // 是否显示时间戳

  this.init = () => {
    // 从state中获取已保存的最近书签
    if (state.get.current().header.recentbookmarks && 
        state.get.current().header.recentbookmarks.items) {
      this.recent = state.get.current().header.recentbookmarks.items;
    }

    this.element.title.textContent = message.get('headerRecentBookmarksTitle');
    this.element.clear.textContent = message.get('headerRecentBookmarksClear');
    
    // 添加清除按钮点击事件
    this.element.clear.addEventListener('click', () => {
      this.clear();
    });
    
    this.render();
  };

  this.render = () => {
    // 清空列表
    this.element.list.innerHTML = '';
    
    // 渲染最近使用的书签
    this.recent.forEach(item => {
      const bookmarkItem = node('a|class:recent-bookmarks-item');
      bookmarkItem.href = item.link.url;
      bookmarkItem.title = item.link.display.visual.letter.text;
      
      // // 创建图标或字母显示
      // const visual = node('span|class:recent-bookmarks-item-visual');
      
      // if (item.type === 'icon' && item.icon) {
      //   const iconElement = node(`i|class:${item.icon.prefix} fa-${item.icon.name}`);
      //   visual.appendChild(iconElement);
      // } else if (item.type === 'letter' && item.letter) {
      //   visual.textContent = item.letter;
      // }
      
      // 创建名称显示
      const name = node('span|class:recent-bookmarks-item-name');
      name.textContent = item.link.display.visual.letter.text;
      
      // bookmarkItem.appendChild(visual);
      bookmarkItem.appendChild(name);
      
      // 可选：添加时间戳显示
      if (this.showTimestamp && item.timestamp) {
        const timeAgo = this.getTimeAgo(item.timestamp);
        const timeElement = node('span|class:recent-bookmarks-item-time');
        timeElement.textContent = timeAgo;
        bookmarkItem.appendChild(timeElement);
      }
      
      // 添加点击事件
      bookmarkItem.addEventListener('click', (e) => {
        e.preventDefault();
        // 更新时间戳
        this.updateTimestamp(item.href);
        window.open(item.href, '_blank');
      });
      
      this.element.list.appendChild(bookmarkItem);
    });
    
    // 如果没有最近使用的书签，显示提示信息
    if (this.recent.length === 0) {
      const emptyMessage = node('div|class:recent-bookmarks-empty');
      emptyMessage.textContent = message.get('headerRecentBookmarksEmpty');
      this.element.list.appendChild(emptyMessage);
      
      // 隐藏清除按钮
      this.element.clear.style.display = 'none';
    } else {
      // 显示清除按钮
      this.element.clear.style.display = 'none';
    }
  };

  // 添加获取相对时间的辅助方法
  this.getTimeAgo = (timestamp) => {
    const now = Date.now();
    const diff = now - timestamp;
    
    // 转换为分钟
    const minutes = Math.floor(diff / 60000);
    
    if (minutes < 1) return message.get('headerRecentBookmarksJustNow');
    if (minutes < 60) return message.get('headerRecentBookmarksMinutesAgo').replace('{minutes}', minutes);
    
    // 转换为小时
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return message.get('headerRecentBookmarksHoursAgo').replace('{hours}', hours);
    
    // 转换为天
    const days = Math.floor(hours / 24);
    if (days < 7) return message.get('headerRecentBookmarksDaysAgo').replace('{days}', days);
    
    // 超过一周就显示日期
    const date = new Date(timestamp);
    return date.toLocaleDateString();
  };

  // 更新时间戳
  this.updateTimestamp = (url) => {
    const index = this.recent.findIndex(item => item.href === url);
    if (index !== -1) {
      this.recent[index].timestamp = Date.now();
      
      // 更新state
      if (state.get.current().header.recentbookmarks) {
        state.get.current().header.recentbookmarks.items = this.recent;
        data.save();
      }
    }
  };

  // 修改 addBookmark 方法，使其处理已经格式化好的数据
  this.addBookmark = (bookmarkData) => {
    // 检查是否已存在相同URL的书签
    const existingIndex = this.recent.findIndex(item => item.href === bookmarkData.href);
    
    // 如果存在，先移除它
    if (existingIndex !== -1) {
      this.recent.splice(existingIndex, 1);
    }
    
    // 添加到最前面
    this.recent.unshift(bookmarkData);
    
    // 限制数量
    if (this.recent.length > this.maxItems) {
      this.recent = this.recent.slice(0, this.maxItems);
    }
    
    // 更新state
    if (!state.get.current().header.recentbookmarks) {
      state.get.current().header.recentbookmarks = {};
    }
    state.get.current().header.recentbookmarks.items = this.recent;
    
    // 保存数据
    data.save();
    
    // 重新渲染
    this.render();
  };

  this.clear = () => {
    this.recent = [];
    if (state.get.current().header.recentBookmarks) {
      state.get.current().header.recentBookmarks.items = [];
    }
    data.save();
    this.render();
  };

  this.assemble = () => {
    // this.element.container.appendChild(this.element.title);
    this.element.container.appendChild(this.element.list);
    this.element.container.appendChild(this.element.clear);
    this.init();
  };

  this.recentBookmarks = () => {
    return this.element.container;
  };

  this.assemble();
  this.init();
}; 