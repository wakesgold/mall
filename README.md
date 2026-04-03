# 纵合传媒案例展示网站

基于 Next.js 16 + Tailwind CSS 4 搭建的企业案例展示站，适合持续扩展本地案例、团队信息和联系方式。

## 页面结构

- 首页 `/`
- 案例列表页 `/cases`
- 案例详情页 `/cases/[slug]`
- 团队展示页 `/team`
- 联系我们 `/contact`

## 技术栈

- Next.js 16 App Router
- React 19
- Tailwind CSS 4
- TypeScript

## 数据组织方式

当前所有内容都保存在本地 TypeScript 数据文件中：

- `src/data/site.ts`：公司信息、导航、首页服务模块
- `src/data/cases.ts`：案例列表和详情数据
- `src/data/team.ts`：团队成员信息
- `src/types/index.ts`：数据类型定义

后续新增案例时，建议直接在 `src/data/cases.ts` 中按现有结构追加对象：

```ts
{
  slug: "new-case",
  name: "案例名称",
  category: "行业分类",
  location: "城市",
  status: "已交付",
  coverTag: "标签",
  summary: "案例简介",
  challenge: "客户面临的问题",
  solution: ["执行动作 1", "执行动作 2"],
  results: [{ label: "核心指标", value: "10w+" }],
  services: ["服务项 1", "服务项 2"],
}
```

## 本地启动

安装依赖：

```bash
npm install
```

启动开发环境：

```bash
npm run dev
```

打开浏览器访问：

```bash
http://localhost:3000
```

## 生产构建

构建项目：

```bash
npm run build
```

本地运行生产版本：

```bash
npm run start
```

## 部署方式

### 方式一：Vercel

1. 把项目推到 Git 仓库
2. 在 Vercel 导入仓库
3. 直接使用默认 Next.js 配置部署

### 方式二：Node.js 服务器

1. 在服务器拉取项目代码
2. 执行 `npm install`
3. 执行 `npm run build`
4. 执行 `npm run start`
5. 使用 Nginx 或其他反向代理把流量转发到应用端口

## 项目结构

```bash
src
├── app
│   ├── cases
│   ├── contact
│   ├── team
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components
├── data
└── types
```

## 备注

- 当前案例图片和截图尚未接入，页面先以高级简洁的文本和数据展示为主
- 如果后续你要接入真实封面图、客户 logo、视频截图或 CMS，我可以继续帮你扩展
