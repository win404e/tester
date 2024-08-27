import { test, expect } from '@playwright/test';
import path from 'path';

const authFile = path.resolve(__dirname,'../playwright/.auth/user.json')

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  await page.getByRole('button', { name: 'Google Logo เข้าสู่ระบบด้วย' }).click();
  await page.getByLabel('Email or phone').click();
  await page.getByLabel('Email or phone').fill('640112418115@bru.ac.th');
  await page.getByRole('button', { name: 'Next', exact: true }).click();
  await page.getByLabel('Enter your password').click();
  await page.getByLabel('Enter your password').fill('u1f1@b1fb3');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'ดำเนินการต่อ' }).click();
});


