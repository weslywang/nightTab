import { state } from '../state';
import { theme } from '../theme';
import { icon } from '../icon';

import * as form from '../form';

import { Button } from '../button';
import { Alert } from '../alert';
import { Link } from '../link';
import { Dropdown } from '../dropdown';
import { ShadeBar } from '../shadeBar';
import { Tab } from '../tab';

import { Control_helperText } from '../control/helperText';
import { Control_radio } from '../control/radio';
import { Control_checkbox } from '../control/checkbox';
import { Control_slider } from '../control/slider';
import { Control_sliderSlim } from '../control/sliderSlim';
import { Control_sliderDouble } from '../control/sliderDouble';
import { Control_color } from '../control/color';
import { Control_colorMixer } from '../control/colorMixer';
import { Control_text } from '../control/text';
import { Control_textarea } from '../control/textarea';
import { Control_textReset } from '../control/textReset';
import { Control_inputButton } from '../control/inputButton';
import { Control_radioGrid } from '../control/radioGrid';
import { Control_select } from '../control/select';

import { node } from '../../utility/node';
import { clearChildNode } from '../../utility/clearChildNode';
import { applyCSSVar } from '../../utility/applyCSSVar';
import { applyCSSClass } from '../../utility/applyCSSClass';
import { applyCSSState } from '../../utility/applyCSSState';

import './index.css';
import { inputButton } from '../form/input';

const showcase = {};

showcase.element = {
  showcase: node('div|class:showcase'),
  side: node('div|class:showcase-side'),
  control: node('div|class:showcase-control'),
  content: node('div|class:showcase-content'),
  column1: node('div|class:showcase-column'),
  column2: node('div|class:showcase-column'),
  column3: node('div|class:showcase-column'),
};

showcase.state = {};

showcase.state.current = {};

showcase.state.default = {
  disable: false,
  input: {
    radio: { a: '1', b: '1', c: '1', grid3x3: '1', grid3x1: '1', grid1x3: '1' },
    checkbox: { a: true, b: false, c: true, d: false },
    color: {
      mixer: { hsl: { h: 221, s: 100, l: 50 }, rgb: { r: 0, g: 80, b: 255 } },
    },
    number: 50,
    numberRange: { start: 20, end: 80 },
  },
  select: 'Alpha',
};

showcase.state.minMax = {
  input: {
    color: {
      mixer: {
        hsl: { h: { min: 0, max: 359 }, s: { min: 0, max: 100 }, l: { min: 0, max: 100 } },
        rgb: { r: { min: 0, max: 255 }, g: { min: 0, max: 255 }, b: { min: 0, max: 255 } },
      },
    },
    number: { min: 0, max: 100 },
    numberRange: { start: { min: 0, max: 100 }, end: { min: 0, max: 100 } },
  }
};

showcase.state.get = {
  current: () => { return showcase.state.current; },
  default: () => { return JSON.parse(JSON.stringify(showcase.state.default)); },
  minMax: () => { return JSON.parse(JSON.stringify(showcase.state.minMax)); },
};

showcase.state.current = showcase.state.get.default();

showcase.disable = () => {

  if (showcase.state.get.current().disable) {

    showcase.control.input.radio.a.disable();
    showcase.control.input.radio.b.disable();
    showcase.control.input.radio.c.disable();
    showcase.control.input.radio.grid3x3.disable();
    showcase.control.input.radio.grid3x1.disable();
    showcase.control.input.radio.grid1x3.disable();
    showcase.control.input.checkbox.a.disable();
    showcase.control.input.checkbox.b.disable();
    showcase.control.input.checkbox.c.disable();
    showcase.control.input.checkbox.d.disable();
    showcase.control.button.a.disable();
    showcase.control.button.b.disable();
    showcase.control.button.c.disable();
    showcase.control.button.d.disable();
    showcase.control.button.e.disable();
    showcase.control.button.f.disable();
    showcase.control.button.g.disable();
    showcase.control.button.dropdown.disable();
    showcase.control.tab.disable();
    showcase.control.input.text.disable();
    showcase.control.input.textarea.disable();
    showcase.control.input.color.mixer.disable();
    showcase.control.input.number.disable();
    showcase.control.input.numberRange.disable();
    showcase.control.input.color.basic.a.disable();
    showcase.control.input.color.basic.b.disable();
    showcase.control.input.color.inputButton.a.disable();
    showcase.control.input.color.inputButton.b.disable();
    showcase.control.select.disable();

  } else {

    showcase.control.input.radio.a.enable();
    showcase.control.input.radio.b.enable();
    showcase.control.input.radio.c.enable();
    showcase.control.input.radio.grid3x3.enable();
    showcase.control.input.radio.grid3x1.enable();
    showcase.control.input.radio.grid1x3.enable();
    showcase.control.input.checkbox.a.enable();
    showcase.control.input.checkbox.b.enable();
    showcase.control.input.checkbox.c.enable();
    showcase.control.input.checkbox.d.enable();
    showcase.control.button.a.enable();
    showcase.control.button.b.enable();
    showcase.control.button.c.enable();
    showcase.control.button.d.enable();
    showcase.control.button.e.enable();
    showcase.control.button.f.enable();
    showcase.control.button.g.enable();
    showcase.control.button.dropdown.enable();
    showcase.control.tab.enable();
    showcase.control.input.text.enable();
    showcase.control.input.textarea.enable();
    showcase.control.input.color.mixer.enable();
    showcase.control.input.number.enable();
    showcase.control.input.numberRange.enable();
    showcase.control.input.color.basic.a.enable();
    showcase.control.input.color.basic.b.enable();
    showcase.control.input.color.inputButton.a.enable();
    showcase.control.input.color.inputButton.b.enable();
    showcase.control.select.enable();

  }

};

showcase.control = {
  side: {},
  shade: {},
  input: {},
  dropdown: {},
  button: {},
  bookmark: {},
  icon: [],
};

showcase.area = {};

showcase.area.render = () => {

  showcase.area.assemble();

  const body = document.querySelector('body');

  body.appendChild(showcase.element.showcase);

};

showcase.area.assemble = () => {

  showcase.control.side = {
    style: new Control_radio({
      object: state.get.current(),
      buttonHideInput: true,
      inputButtonStyle: ['line'],
      radioGroup: [
        { id: 'theme-style-dark', labelText: 'Dark', value: 'dark' },
        { id: 'theme-style-light', labelText: 'Light', value: 'light' },
        { id: 'theme-style-system', labelText: 'Auto', value: 'system' }
      ],
      groupName: 'theme-style',
      path: 'theme.style',
      action: () => {
        theme.style.initial();
        applyCSSClass('theme.style');
      }
    }),
    disable: new Control_checkbox({
      object: showcase.state.get.current(),
      id: 'disable',
      path: 'disable',
      labelText: 'Disable',
      buttonHideInput: true,
      inputButtonStyle: ['line'],
      action: () => {
        showcase.disable();
        console.log(showcase.state.get.current());
      }
    }),
    h: new Control_sliderSlim({
      object: state.get.current(),
      path: 'theme.color.range.primary.h',
      id: 'theme-color-range-primary-h',
      labelText: 'Hue',
      value: state.get.current().theme.color.range.primary.h,
      defaultValue: state.get.default().theme.color.range.primary.h,
      min: state.get.minMax().theme.color.range.primary.h.min,
      max: state.get.minMax().theme.color.range.primary.h.max,
      style: 'hue',
      action: () => {
        theme.color.render();
      }
    }),
    s: new Control_sliderSlim({
      object: state.get.current(),
      path: 'theme.color.range.primary.s',
      id: 'theme-color-range-primary-s',
      labelText: 'Saturation',
      value: state.get.current().theme.color.range.primary.s,
      defaultValue: state.get.default().theme.color.range.primary.s,
      min: state.get.minMax().theme.color.range.primary.s.min,
      max: state.get.minMax().theme.color.range.primary.s.max,
      style: 'saturation',
      action: () => {
        theme.color.render();
      }
    }),
    contrast: new Control_sliderDouble({
      object: state.get.current(),
      labelText: 'Contrast',
      style: 'contrast',
      left: {
        path: 'theme.color.contrast.start',
        id: 'theme-color-contrast-start',
        labelText: 'Contrast start',
        value: state.get.current().theme.color.contrast.start,
        defaultValue: state.get.default().theme.color.contrast.start,
        min: state.get.minMax().theme.color.contrast.start.min,
        max: state.get.minMax().theme.color.contrast.start.max,
        action: () => {
          theme.color.render();
        }
      },
      right: {
        path: 'theme.color.contrast.end',
        id: 'theme-color-contrast-end',
        labelText: 'Contrast end',
        value: state.get.current().theme.color.contrast.end,
        defaultValue: state.get.default().theme.color.contrast.end,
        min: state.get.minMax().theme.color.contrast.end.min,
        max: state.get.minMax().theme.color.contrast.end.max,
        action: () => {
          theme.color.render();
        }
      }
    }),
    accent: new Control_colorMixer({
      object: state.get.current(),
      path: 'theme.accent',
      id: 'theme-accent-a',
      labelText: 'Accent',
      defaultValue: state.get.default().theme.accent.rgb,
      minMaxObject: state.get.minMax(),
      randomColor: true,
      action: () => {

        applyCSSVar([
          'theme.accent.rgb.r',
          'theme.accent.rgb.g',
          'theme.accent.rgb.b',
          'theme.accent.hsl.h',
          'theme.accent.hsl.s',
          'theme.accent.hsl.l'
        ]);

        // showcase.control.side.accent.update();
        showcase.control.input.color.basic.a.update();
        showcase.control.input.color.basic.b.update();
        showcase.control.input.color.inputButton.a.update();
        showcase.control.input.color.inputButton.b.update();
        showcase.control.input.color.mixer.update();

      }
    }),
    shadow: new Control_sliderSlim({
      object: state.get.current(),
      path: 'theme.shadow',
      id: 'theme-shadow',
      labelText: 'Shadow',
      value: state.get.current().theme.shadow,
      defaultValue: state.get.default().theme.shadow,
      min: state.get.minMax().theme.shadow.min,
      max: state.get.minMax().theme.shadow.max,
      action: () => {
        applyCSSVar('theme.shadow');
      }
    }),
    radius: new Control_sliderSlim({
      object: state.get.current(),
      path: 'theme.radius',
      id: 'theme-radius',
      labelText: 'Radius',
      value: state.get.current().theme.radius,
      defaultValue: state.get.default().theme.radius,
      min: state.get.minMax().theme.radius.min,
      max: state.get.minMax().theme.radius.max,
      action: () => {
        applyCSSVar('theme.radius');
      }
    }),
    displayFont: new Control_textReset({
      object: state.get.current(),
      path: 'theme.font.display.name',
      id: 'theme-font-display-name',
      value: state.get.current().theme.font.display.name,
      defaultValue: state.get.default().theme.font.display.name,
      placeholder: 'Google font name',
      labelText: 'Display font',
      action: () => {
        theme.font.display.delay();
      }
    }),
    uiFont: new Control_textReset({
      object: state.get.current(),
      path: 'theme.font.ui.name',
      id: 'theme-font-ui-name',
      value: state.get.current().theme.font.ui.name,
      defaultValue: state.get.default().theme.font.ui.name,
      placeholder: 'Google font name',
      labelText: 'User interface font',
      action: () => {
        theme.font.ui.delay();
      }
    }),
    shade: new ShadeBar(),
  }

  showcase.control.input.radio = {
    a: new Control_radio({
      object: showcase.state.get.current(),
      radioGroup: [
        { id: 'input-radio-a-1', labelText: 'Radio 1', description: 'Description 1', value: '1' },
        { id: 'input-radio-a-2', labelText: 'Radio 2', description: 'Description 2', value: '2' },
        { id: 'input-radio-a-3', labelText: 'Radio 3', description: 'Description 3', value: '3' }
      ],
      // label: 'Radio group A',
      groupName: 'input-radio-a',
      path: 'input.radio.a',
      action: () => { console.log(showcase.state.get.current()); }
    }),
    b: new Control_radio({
      object: showcase.state.get.current(),
      radioGroup: [
        { id: 'input-radio-b-1', labelText: 'Radio 1', value: '1' },
        { id: 'input-radio-b-2', labelText: 'Radio 2', value: '2' },
        { id: 'input-radio-b-3', labelText: 'Radio 3', value: '3' }
      ],
      groupName: 'input-radio-b',
      path: 'input.radio.b',
      inputButtonStyle: ['line'],
      action: () => { console.log(showcase.state.get.current()); }
    }),
    c: new Control_radio({
      object: showcase.state.get.current(),
      radioGroup: [
        { id: 'input-radio-c-1', labelText: 'Radio 1', value: '1' },
        { id: 'input-radio-c-2', labelText: 'Radio 2', value: '2' },
        { id: 'input-radio-c-3', labelText: 'Radio 3', value: '3' }
      ],
      label: 'Radio group',
      groupName: 'input-radio-c',
      path: 'input.radio.c',
      buttonHideInput: true,
      inputButtonStyle: ['ring'],
      action: () => { console.log(showcase.state.get.current()); }
    }),
    grid3x3: new Control_radioGrid({
      object: showcase.state.get.current(),
      radioGroup: [
        { id: 'input-radio-grid3x3-1', labelText: '1', value: '1', position: 1 },
        { id: 'input-radio-grid3x3-2', labelText: '2', value: '2', position: 2 },
        { id: 'input-radio-grid3x3-3', labelText: '3', value: '3', position: 3 },
        { id: 'input-radio-grid3x3-4', labelText: '4', value: '4', position: 4 },
        { id: 'input-radio-grid3x3-5', labelText: '5', value: '5', position: 5 },
        { id: 'input-radio-grid3x3-6', labelText: '6', value: '6', position: 6 },
        { id: 'input-radio-grid3x3-7', labelText: '7', value: '7', position: 7 },
        { id: 'input-radio-grid3x3-8', labelText: '8', value: '8', position: 8 },
        { id: 'input-radio-grid3x3-9', labelText: '9', value: '9', position: 9 }
      ],
      // label: 'Radio grid',
      groupName: 'input-radio-grid3x3',
      path: 'input.radio.grid3x3',
      gridSize: '3x3',
      action: () => { console.log(showcase.state.get.current()); }
    }),
    grid1x3: new Control_radioGrid({
      object: showcase.state.get.current(),
      radioGroup: [
        { id: 'input-radio-grid1x3-1', labelText: '1', value: '1', position: 1 },
        { id: 'input-radio-grid1x3-2', labelText: '2', value: '2', position: 2 },
        { id: 'input-radio-grid1x3-3', labelText: '3', value: '3', position: 3 }
      ],
      // label: 'Radio grid vertical',
      groupName: 'input-radio-grid1x3',
      path: 'input.radio.grid1x3',
      gridSize: '1x3',
      action: () => { console.log(showcase.state.get.current()); }
    }),
    grid3x1: new Control_radioGrid({
      object: showcase.state.get.current(),
      radioGroup: [
        { id: 'input-radio-grid3x1-1', labelText: '1', value: '1', position: 1 },
        { id: 'input-radio-grid3x1-2', labelText: '2', value: '2', position: 2 },
        { id: 'input-radio-grid3x1-3', labelText: '3', value: '3', position: 3 }
      ],
      // label: 'Radio grid horizontal',
      groupName: 'input-radio-grid3x1',
      path: 'input.radio.grid3x1',
      gridSize: '3x1',
      action: () => { console.log(showcase.state.get.current()); }
    }),
  }

  showcase.control.input.checkbox = {
    a: new Control_checkbox({
      object: showcase.state.get.current(),
      id: 'input-checkbox-a',
      path: 'input.checkbox.a',
      labelText: 'Checkbox A',
      description: 'Description A',
      action: () => { console.log(showcase.state.get.current()); }
    }),
    b: new Control_checkbox({
      object: showcase.state.get.current(),
      id: 'input-checkbox-b',
      path: 'input.checkbox.b',
      labelText: 'Checkbox B',
      description: 'Description B',
      action: () => { console.log(showcase.state.get.current()); }
    }),
    c: new Control_checkbox({
      object: showcase.state.get.current(),
      id: 'input-checkbox-c',
      path: 'input.checkbox.c',
      labelText: 'Checkbox A',
      inputButtonStyle: ['line'],
      action: () => { console.log(showcase.state.get.current()); }
    }),
    d: new Control_checkbox({
      object: showcase.state.get.current(),
      id: 'input-checkbox-d',
      path: 'input.checkbox.d',
      labelText: 'Checkbox B',
      buttonHideInput: true,
      inputButtonStyle: ['line'],
      action: () => { console.log(showcase.state.get.current()); }
    }),
  }

  showcase.control.input.text = new Control_text({
    labelText: 'Text',
    placeholder: 'Placeholder',
    id: 'text',
  })

  showcase.control.input.textarea = new Control_textarea({
    labelText: 'Textarea',
    placeholder: 'Placeholder',
    id: 'textarea',
  })

  showcase.control.input.color = {
    basic: {
      a: new Control_color({
        object: state.get.current(),
        path: 'theme.accent',
        id: 'theme-accent',
        labelText: 'Colour',
        action: () => {

          console.log(showcase.state.get.current());

          applyCSSVar([
            'theme.accent.rgb.r',
            'theme.accent.rgb.g',
            'theme.accent.rgb.b',
            'theme.accent.hsl.h',
            'theme.accent.hsl.s',
            'theme.accent.hsl.l'
          ]);

          showcase.control.side.accent.update();
          // showcase.control.input.color.basic.a.update();
          showcase.control.input.color.basic.b.update();
          showcase.control.input.color.inputButton.a.update();
          showcase.control.input.color.inputButton.b.update();
          showcase.control.input.color.mixer.update();

        }
      }),
      b: new Control_color({
        object: state.get.current(),
        path: 'theme.accent',
        id: 'theme-accent-b',
        labelText: 'Colour',
        text: false,
        srOnly: true,
        action: () => {

          console.log(showcase.state.get.current());

          applyCSSVar([
            'theme.accent.rgb.r',
            'theme.accent.rgb.g',
            'theme.accent.rgb.b',
            'theme.accent.hsl.h',
            'theme.accent.hsl.s',
            'theme.accent.hsl.l'
          ]);

          showcase.control.side.accent.update();
          showcase.control.input.color.basic.a.update();
          // showcase.control.input.color.basic.b.update();
          showcase.control.input.color.inputButton.a.update();
          showcase.control.input.color.inputButton.b.update();
          showcase.control.input.color.mixer.update();

        }
      })
    },
    inputButton: {
      a: new Control_inputButton({
        object: state.get.current(),
        path: 'theme.accent',
        id: 'theme-accent-c',
        type: 'color',
        labelText: "Colour",
        inputButtonStyle: ['line'],
        action: () => {

          console.log(showcase.state.get.current());

          applyCSSVar([
            'theme.accent.rgb.r',
            'theme.accent.rgb.g',
            'theme.accent.rgb.b',
            'theme.accent.hsl.h',
            'theme.accent.hsl.s',
            'theme.accent.hsl.l'
          ]);

          showcase.control.side.accent.update();
          showcase.control.input.color.basic.a.update();
          showcase.control.input.color.basic.b.update();
          // showcase.control.input.color.inputButton.a.update();
          showcase.control.input.color.inputButton.b.update();
          showcase.control.input.color.mixer.update();

        }
      }),
      b: new Control_inputButton({
        object: state.get.current(),
        path: 'theme.accent',
        id: 'theme-accent',
        type: 'color',
        labelText: "Colour",
        srOnly: true,
        inputButtonStyle: ['dot', 'line'],
        action: () => {

          console.log(showcase.state.get.current());

          applyCSSVar([
            'theme.accent.rgb.r',
            'theme.accent.rgb.g',
            'theme.accent.rgb.b',
            'theme.accent.hsl.h',
            'theme.accent.hsl.s',
            'theme.accent.hsl.l'
          ]);

          showcase.control.side.accent.update();
          showcase.control.input.color.basic.a.update();
          showcase.control.input.color.basic.b.update();
          showcase.control.input.color.inputButton.a.update();
          // showcase.control.input.color.inputButton.b.update();
          showcase.control.input.color.mixer.update();

        }
      })
    },
    mixer: new Control_colorMixer({
      object: state.get.current(),
      path: 'theme.accent',
      id: 'theme-accent',
      labelText: 'Colour',
      defaultValue: state.get.default().theme.accent.rgb,
      minMaxObject: state.get.minMax(),
      randomColor: true,
      action: () => {

        console.log(showcase.state.get.current());

        applyCSSVar([
          'theme.accent.rgb.r',
          'theme.accent.rgb.g',
          'theme.accent.rgb.b',
          'theme.accent.hsl.h',
          'theme.accent.hsl.s',
          'theme.accent.hsl.l'
        ]);

        showcase.control.side.accent.update();
        showcase.control.input.color.basic.a.update();
        showcase.control.input.color.basic.b.update();
        showcase.control.input.color.inputButton.a.update();
        showcase.control.input.color.inputButton.b.update();
        // showcase.control.input.color.mixer.update();

      }
    }),
  }

  showcase.control.input.number = new Control_slider({
    object: showcase.state.get.current(),
    path: 'input.number',
    id: 'input-number',
    labelText: 'Number',
    value: showcase.state.get.current().input.number,
    defaultValue: showcase.state.get.default().input.number,
    min: showcase.state.get.minMax().input.number.min,
    max: showcase.state.get.minMax().input.number.max,
    action: () => { console.log(showcase.state.get.current()); }
  })

  showcase.control.input.numberRange = new Control_sliderDouble({
    object: showcase.state.get.current(),
    labelText: 'Number range',
    left: {
      path: 'input.numberRange.start',
      id: 'input-numberRange-start',
      labelText: 'Start',
      value: showcase.state.get.current().input.numberRange.start,
      defaultValue: showcase.state.get.default().input.numberRange.start,
      min: showcase.state.get.minMax().input.numberRange.start.min,
      max: showcase.state.get.minMax().input.numberRange.start.max,
      action: () => { console.log(showcase.state.get.current()); }
    },
    right: {
      path: 'input.numberRange.end',
      id: 'input-numberRange-end',
      labelText: 'End',
      value: showcase.state.get.current().input.numberRange.end,
      defaultValue: showcase.state.get.default().input.numberRange.end,
      min: showcase.state.get.minMax().input.numberRange.end.min,
      max: showcase.state.get.minMax().input.numberRange.end.max,
      action: () => { console.log(showcase.state.get.current()); }
    }
  })

  showcase.control.tab = new Tab({
    hideContent: true,
    group: [{
      tabText: 'Tab 1',
      area: node('div', [node('p:Tabbed content 1')]),
      active: true
    }, {
      tabText: 'Tab 2',
      area: node('div', [node('p:Tabbed content 2')]),
      active: false
    }, {
      tabText: 'Tab 3',
      area: node('div', [node('p:Tabbed content 3')]),
      active: false
    }, {
      tabText: 'Tab 4',
      area: node('div', [node('p:Tabbed content 4')]),
      active: false
    }]
  })

  showcase.control.alert = new Alert({
    iconName: 'propagate',
    children: [node('p:A neutral new tab page accented with a chosen colour.')]
  })

  showcase.control.select = new Control_select({
    object: showcase.state.get.current(),
    path: 'select',
    id: 'select',
    labelText: 'Select',
    option: ['Alpha', 'Beta', 'Gamma'],
    selected: showcase.state.get.current().select,
    action: () => { console.log(showcase.state.get.current()); }
  })

  showcase.control.button = {
    a: new Button({ text: 'Button' }),
    b: new Button({ text: 'Button line', style: ['line'] }),
    c: new Button({ text: 'Button ring', style: ['ring'] }),
    d: new Button({ text: 'Button small', style: ['line'], size: 'small' }),
    e: new Button({ text: 'Button medium', style: ['line'] }),
    f: new Button({ text: 'Button large', style: ['line'], size: 'large' }),
    g: new Button({ text: 'Add new stuff', style: ['line'], iconName: 'add', srOnly: true }),
    dropdown: new Dropdown({
      text: 'Dropdown',
      buttonStyle: ['line'],
      iconName: 'arrowKeyboardDown',
      persist: true,
      menuItem: [
        { text: 'One', iconName: 'addGroup' },
        { text: 'Two', iconName: 'addBookmark' }
      ]
    }),
  }

  for (let key in icon.all) {
    showcase.control.icon.push(
      form.wrap({
        children: [
          node('div|class:d-flex d-horizontal d-gap d-center', [
            node('div', [icon.render(key)])
          ])
        ]
      })
    );
  }

  showcase.element.side.append(showcase.element.control)

  showcase.element.control.append(
    form.wrap({
      children: [
        form.inline({
          align: 'top',
          gap: 'small',
          children: [
            showcase.control.side.style.inputButton(),
            showcase.control.side.disable.inputButton(),
          ]
        })
      ]
    }),
    node('hr'),
    showcase.control.side.shade.shadeBar(),
    showcase.control.side.h.wrap(),
    showcase.control.side.s.wrap(),
    showcase.control.side.contrast.wrap(),
    node('hr'),
    showcase.control.side.accent.wrap(),
    showcase.control.side.shadow.wrap(),
    showcase.control.side.radius.wrap(),
    // showcase.control.side.displayFont.wrap(),
    // showcase.control.side.uiFont.wrap(),
  )

  showcase.element.column1.append(
    form.wrap({
      children: [
        form.inline({
          children: [
            node('div|class:showcase-type', [
              node('h1:Heading 1'),
              node('h2:Heading 2'),
              node('h3:Heading 3'),
            ]),
            node('div|class:showcase-type', [
              node('h4:Heading 4'),
              node('h5:Heading 5'),
              node('h6:Heading 6'),
            ]),
          ]
        }),
      ]
    }),
    new Link({ text: 'iTab', href: 'https://github.com/zombieFox/iTab', openNew: true }).wrap(),
    form.wrap({
      children: [
        node('p:A neutral new tab page accented with a chosen colour. Customise the layout, style, background and bookmarks with iTab.'),
      ]
    }),
    new Control_helperText({
      text: ['A neutral new tab page accented with a chosen colour. Customise the layout, style, background and bookmarks with iTab.']
    }).wrap(),
    form.wrap({
      children: [
        node('ul', [
          node('li:List item 1'),
          node('li:List item 2'),
          node('li:List item 3'),
        ]),
      ]
    }),
    showcase.control.alert.wrap(),
    form.wrap({
      children: [
        node('div|class:showcase-icon', [
          form.inline({
            gap: 'small',
            wrap: true,
            equalGap: true,
            children: showcase.control.icon
          }),
        ]),
      ]
    }),
  )

  showcase.element.column2.append(
    form.wrap({
      children: [
        form.inline({
          wrap: true,
          gap: 'small',
          align: 'center',
          children: [
            showcase.control.button.a.wrap(),
            showcase.control.button.b.wrap(),
            showcase.control.button.c.wrap(),
          ]
        })
      ]
    }),
    form.wrap({
      children: [
        form.inline({
          wrap: true,
          gap: 'small',
          align: 'center',
          children: [
            showcase.control.input.color.basic.b.wrap(),
            showcase.control.input.color.inputButton.b.wrap(),
            showcase.control.button.g.wrap(),
            showcase.control.button.dropdown.toggle,
          ]
        })
      ]
    }),
    showcase.control.input.radio.a.inline(),
    form.wrap({
      children: [
        form.inline({
          gap: 'large',
          children: [
            showcase.control.input.checkbox.a.wrap(),
            showcase.control.input.checkbox.b.wrap(),
          ]
        }),
      ]
    }),
    form.wrap({
      children: [
        form.inline({
          wrap: true,
          gap: 'small',
          align: 'center',
          children: [
            showcase.control.input.radio.b.inputButton(),
          ]
        })
      ]
    }),
    form.wrap({
      children: [
        form.inline({
          wrap: true,
          gap: 'small',
          align: 'center',
          children: [
            showcase.control.input.radio.c.inputButton(),
          ]
        })
      ]
    }),
    form.wrap({
      children: [
        form.inline({
          wrap: true,
          gap: 'small',
          align: 'center',
          children: [
            showcase.control.input.checkbox.c.inputButton(),
            showcase.control.input.checkbox.d.inputButton(),
          ]
        })
      ]
    }),
    form.wrap({
      children: [
        form.inline({
          align: 'center',
          gap: 'small',
          children: [
            showcase.control.input.radio.grid3x3.wrap(),
            showcase.control.input.radio.grid1x3.wrap(),
            showcase.control.input.radio.grid3x1.wrap(),
          ]
        }),
      ]
    }),
    form.wrap({
      children: [
        showcase.control.tab.tab(),
      ]
    }),
  )

  showcase.element.column3.append(
    showcase.control.input.text.wrap(),
    showcase.control.input.textarea.wrap(),
    // showcase.control.input.color.mixer.wrap(),
    showcase.control.input.number.wrap(),
    showcase.control.input.numberRange.wrap(),
    showcase.control.select.wrap(),
  )

  showcase.element.content.append(
    showcase.element.column1,
    showcase.element.column2,
    showcase.element.column3,
  )

  showcase.element.showcase.append(showcase.element.side)

  showcase.element.showcase.append(showcase.element.content)

};

showcase.area.clear = () => {

  clearChildNode(showcase.element.showcase);

};

export { showcase };