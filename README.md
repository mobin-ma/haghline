# حق لاین - پلتفرم حقوقی آنلاین

پلتفرم آنلاین برای ارتباط مستقیم کاربران با وکلا و مشاوران حقوقی

## ویژگی‌ها

- 🔐 سیستم احراز هویت با OTP
- 👥 پشتیبانی از کاربران حقیقی و حقوقی
- 🎨 رابط کاربری مدرن و ریسپانسیو
- 🌙 پشتیبانی از حالت تاریک
- 📱 بهینه‌سازی شده برای موبایل
- ⚡ استفاده از Next.js 15 و React 19

## تکنولوژی‌های استفاده شده

- **Frontend**: Next.js 15, React 19, TypeScript
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Icons**: React Icons
- **Animations**: Motion

## نصب و راه‌اندازی

1. کلون کردن پروژه:
```bash
git clone <repository-url>
cd haghline
```

2. نصب dependencies:
```bash
pnpm install
# یا
npm install
```

3. تنظیم متغیرهای محیطی:
```bash
cp .env.example .env.local
```

4. اجرای پروژه:
```bash
pnpm dev
# یا
npm run dev
```

5. باز کردن مرورگر:
```
http://localhost:3000
```

## ساختار پروژه

```
├── app/                 # Next.js App Router
├── components/          # کامپوننت‌های React
├── hooks/              # Custom Hooks
├── lib/                # کتابخانه‌ها و utilities
├── store/              # Redux store و slices
├── public/             # فایل‌های استاتیک
└── types/              # TypeScript types
```

## اسکریپت‌های موجود

- `pnpm dev` - اجرای development server
- `pnpm build` - ساخت production build
- `pnpm start` - اجرای production server
- `pnpm lint` - بررسی کد با ESLint

## مشارکت

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
