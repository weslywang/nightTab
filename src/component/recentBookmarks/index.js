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
    list: node('div|class:recent-bookmarks-list')
  };

  this.recent = [];
  this.maxItems = 5; // 默认显示5个最近使用的书签

  this.init = () => {
    // 从state中获取已保存的最近书签
    if (state.get.current().header.recentBookmarks && 
        state.get.current().header.recentBookmarks.items) {
      this.recent = state.get.current().header.recentBookmarks.items;
    }

    this.element.title.textContent = message.get('headerRecentBookmarksTitle');
    this.render();
  };

  this.render = () => {
    // 清空列表
    this.element.list.innerHTML = '';
    
    // 渲染最近使用的书签
    this.recent.forEach(item => {
      const bookmarkItem = node('a|class:recent-bookmarks-item');
      bookmarkItem.href = item.url;
      bookmarkItem.title = item.name;
      
      // 创建图标或字母显示
      const visual = node('span|class:recent-bookmarks-item-visual');
      
      if (item.type === 'icon' && item.icon) {
        const iconElement = node(`i|class:${item.icon.prefix} fa-${item.icon.name}`);
        visual.appendChild(iconElement);
      } else if (item.type === 'letter' && item.letter) {
        visual.textContent = item.letter;
      }
      
      // 创建名称显示
      const name = node('span|class:recent-bookmarks-item-name');
      name.textContent = item.name;
      
      bookmarkItem.appendChild(visual);
      bookmarkItem.appendChild(name);
      
      // 添加点击事件
      bookmarkItem.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(item.url, '_blank');
      });
      
      this.element.list.appendChild(bookmarkItem);
    });
    
    // 如果没有最近使用的书签，显示提示信息
    if (this.recent.length === 0) {
      const emptyMessage = node('div|class:recent-bookmarks-empty');
      emptyMessage.textContent = message.get('headerRecentBookmarksEmpty');
      this.element.list.appendChild(emptyMessage);
    }
  };

  this.addBookmark = (bookmarkData) => {
    // 创建一个简化版的书签对象
    const newRecentItem = {
      url: bookmarkData.url,
      name: bookmarkData.display.name.text,
      type: bookmarkData.display.visual.type,
      timestamp: Date.now()
    };
    
    // 根据类型添加额外信息
    if (newRecentItem.type === 'icon') {
      newRecentItem.icon = {
        name: bookmarkData.display.visual.icon.name,
        prefix: bookmarkData.display.visual.icon.prefix
      };
    } else if (newRecentItem.type === 'letter') {
      newRecentItem.letter = bookmarkData.display.visual.letter.text;
    }
    
    // 检查是否已存在相同URL的书签
    const existingIndex = this.recent.findIndex(item => item.url === newRecentItem.url);
    
    // 如果存在，先移除它
    if (existingIndex !== -1) {
      this.recent.splice(existingIndex, 1);
    }
    
    // 添加到最前面
    this.recent.unshift(newRecentItem);
    
    // 限制数量
    if (this.recent.length > this.maxItems) {
      this.recent = this.recent.slice(0, this.maxItems);
    }
    
    // 更新state
    if (!state.get.current().header.recentBookmarks) {
      state.get.current().header.recentBookmarks = {};
    }
    state.get.current().header.recentBookmarks.items = this.recent;
    
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
    this.element.container.appendChild(this.element.title);
    this.element.container.appendChild(this.element.list);
    this.init();
  };

  this.recentBookmarks = () => {
    return this.element.container;
  };

  this.assemble();
}; 