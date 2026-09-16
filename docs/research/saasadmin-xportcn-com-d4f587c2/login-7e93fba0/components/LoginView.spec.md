# LoginView Specification

## Overview
- **Target file:** `src/components/sites/saasadmin-xportcn-com-d4f587c2/login-7e93fba0/LoginView.tsx`
- **Interaction model:** click-driven form + time-driven clock + bounceInDown entrance

## DOM Structure
`.login-container` > `.login-weaper.animated.bounceInDown` > `.login-left` + `.login-border` > `.login-main` > title + form + menu

## Computed Styles
- container: flex, align center, 100% x 100%, background `#3397ff`, animation `animate-cloud 20s linear infinite`
- weaper: width `1000px`, height `500px`, box-shadow `-4px 5px 10px rgba(0,0,0,.4)`
- left: width 50%, min-height 500px, bg `#409eff`, color `#fff`, flex column center, radius `5px 0 0 5px`
- time: absolute left 25px top 25px, font-weight 200, opacity .9, font-size 18px
- logo img: width 200px
- title: 25px / 300 / letter-spacing 2px / white
- border: white, radius `0 5px 5px 0`
- login-title: 22px / 500 / `#333` / letter-spacing 4px / margin-bottom 40px / center
- inputs: transparent, no border except bottom `1px solid #ebedf2`, color `#333`, indent 5px
- submit: width 100%, height 45px, border `1px solid #409eff`, background none, color `#409eff`, font 18px/300, letter-spacing 2px, margin-top 30px, font-family neo

## States
- Loading: button text `登录中,请稍后。。。`
- Hover submit: fill `#409eff`, text white, transition .25s
- Error: Element-style message for bad credentials

## Text Content
- 左侧标题: Xport 后台管理
- 右侧: 登录 Xport
- placeholders: 请输入用户名 / 请输入密码
- 登录

## Data Contract
- POST `/api/auth/login` via client fetch
