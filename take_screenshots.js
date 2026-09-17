import puppeteer from "puppeteer-core";
import path from "path";
import fs from "fs";

const BRAVE_PATH = "C:\\Users\\Admin\\AppData\\Local\\BraveSoftware\\Brave-Browser\\Application\\brave.exe";
const URL = "http://localhost:4173";
const OUTPUT_DIR = path.resolve("./screenshots");

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function run() {
  console.log("Launching browser via:", BRAVE_PATH);
  const browser = await puppeteer.launch({
    executablePath: BRAVE_PATH,
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"],
    defaultViewport: { width: 1440, height: 900 }
  });

  const page = await browser.newPage();
  console.log("Navigating to:", URL);
  await page.goto(URL, { waitUntil: "networkidle0", timeout: 30000 });
  await page.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 1000));

  // 1. Full-page screenshot
  console.log("Capturing 01_full_page_overview.png...");
  await page.screenshot({
    path: path.join(OUTPUT_DIR, "01_full_page_overview.png"),
    fullPage: true
  });

  // 1b. Recruiter Fast-Track Header Bar
  console.log("Capturing 00_recruiter_header_bar.png...");
  const recEl = await page.$(".recruiter-bar");
  if (recEl) {
    await recEl.screenshot({ path: path.join(OUTPUT_DIR, "00_recruiter_header_bar.png") });
  }

  // 2. Hero Section
  console.log("Capturing 02_hero_section.png...");

  const heroEl = await page.$("#home");
  if (heroEl) {
    await heroEl.screenshot({ path: path.join(OUTPUT_DIR, "02_hero_section.png") });
  }

  // 2b. Tech Stack Matrix
  console.log("Capturing 02b_tech_matrix.png...");
  const techEl = await page.$("#tech-stack");
  if (techEl) {
    await techEl.scrollIntoView();
    await new Promise((r) => setTimeout(r, 500));
    await techEl.screenshot({ path: path.join(OUTPUT_DIR, "02b_tech_matrix.png") });
  }

  // 3. Skills Section

  console.log("Capturing 03_skills_and_competencies.png...");
  const skillsEl = await page.$("#skills");
  if (skillsEl) {
    await skillsEl.scrollIntoView();
    await new Promise((r) => setTimeout(r, 500));
    await skillsEl.screenshot({ path: path.join(OUTPUT_DIR, "03_skills_and_competencies.png") });
  }

  // 4. Experience Section
  console.log("Capturing 04_experience_timeline.png...");
  const expEl = await page.$("#experience");
  if (expEl) {
    await expEl.scrollIntoView();
    await new Promise((r) => setTimeout(r, 500));
    await expEl.screenshot({ path: path.join(OUTPUT_DIR, "04_experience_timeline.png") });
  }

  // 5. Certifications Section
  console.log("Capturing 05_certifications_and_ccna.png...");
  const certEl = await page.$("#certificates");
  if (certEl) {
    await certEl.scrollIntoView();
    await new Promise((r) => setTimeout(r, 500));
    await certEl.screenshot({ path: path.join(OUTPUT_DIR, "05_certifications_and_ccna.png") });
  }

  // 6. Projects Section
  console.log("Capturing 06_featured_projects.png...");
  const projEl = await page.$("#projects");
  if (projEl) {
    await projEl.scrollIntoView();
    await new Promise((r) => setTimeout(r, 500));
    await projEl.screenshot({ path: path.join(OUTPUT_DIR, "06_featured_projects.png") });
  }

  // 7. Project Modal (STAR Breakdown)
  console.log("Capturing 07_project_modal_breakdown.png...");
  const firstProjectCard = await page.$(".project-card");
  if (firstProjectCard) {
    await firstProjectCard.click();
    await new Promise((r) => setTimeout(r, 800));
    await page.screenshot({ path: path.join(OUTPUT_DIR, "07_project_modal_breakdown.png") });
    // close modal
    await page.keyboard.press("Escape");
    await new Promise((r) => setTimeout(r, 500));
  }

  // 8. Field Gallery Section
  console.log("Capturing 08_field_evidence_gallery.png...");
  const galEl = await page.$("#gallery");
  if (galEl) {
    await galEl.scrollIntoView();
    await new Promise((r) => setTimeout(r, 500));
    await galEl.screenshot({ path: path.join(OUTPUT_DIR, "08_field_evidence_gallery.png") });
  }

  // 9. ATS Resume Modal
  console.log("Capturing 09_ats_resume_modal.png...");
  const resumeBtn = await page.$(".resume-btn");
  if (resumeBtn) {
    await resumeBtn.click();
    await new Promise((r) => setTimeout(r, 800));
    await page.screenshot({ path: path.join(OUTPUT_DIR, "09_ats_resume_modal.png") });
    await page.keyboard.press("Escape");
    await new Promise((r) => setTimeout(r, 500));
  }

  // 10. Contact Section
  console.log("Capturing 10_contact_section.png...");
  const contactEl = await page.$("#contact");
  if (contactEl) {
    await contactEl.scrollIntoView();
    await new Promise((r) => setTimeout(r, 500));
    await contactEl.screenshot({ path: path.join(OUTPUT_DIR, "10_contact_section.png") });
  }

  // 11. Footer Section
  console.log("Capturing 11_footer_section.png...");
  const footerEl = await page.$(".site-footer");
  if (footerEl) {
    await footerEl.scrollIntoView();
    await new Promise((r) => setTimeout(r, 500));
    await footerEl.screenshot({ path: path.join(OUTPUT_DIR, "11_footer_section.png") });
  }

  console.log("All screenshots successfully captured!");

  await browser.close();
}

run().catch((err) => {
  console.error("Error capturing screenshots:", err);
  process.exit(1);
});
