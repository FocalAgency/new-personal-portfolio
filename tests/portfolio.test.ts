import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import test from "node:test";
import {
  experiences,
  profile,
  projects,
  skillGroups,
} from "../src/data/portfolio.ts";

test("selected projects lead with Focal Studio and exclude removed work", async () => {
  assert.deepEqual(
    projects.map(({ slug }) => slug),
    ["focal-studio", "tabb", "block", "moonstone"],
  );
  assert.equal(new Set(projects.map(({ slug }) => slug)).size, projects.length);

  for (const project of projects) {
    assert.match(project.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.ok(project.title.trim());
    assert.ok(project.summary.trim());
    assert.ok(project.details.length > 0);
    assert.ok(project.details.every((detail) => detail.trim()));
    assert.ok(project.stack.length > 0);
    assert.ok(project.imageAlt.trim());
    assert.match(project.image, /^\/images\/projects\/[^/]+\.(?:png|jpg)$/);
    await access(new URL(`../public${project.image}`, import.meta.url));
    assert.equal(Boolean(project.externalUrl), Boolean(project.externalLabel));
    if (project.externalUrl)
      assert.equal(new URL(project.externalUrl).protocol, "https:");
  }
});

test("private case studies distinguish public platform links from private implementation", () => {
  const tabb = projects.find(({ slug }) => slug === "tabb");
  const moonstone = projects.find(({ slug }) => slug === "moonstone");
  const ecommerce = projects.find(({ slug }) => slug === "ecommerce");
  assert.ok(tabb?.private);
  assert.equal(tabb.externalUrl, "https://tabb.cc/");
  assert.match(tabb.externalLabel ?? "", /platform/i);
  assert.match(tabb.imageNote ?? "", /public.*private|private.*public/i);
  assert.ok(moonstone?.private);
  assert.equal(moonstone.externalUrl, undefined);
  assert.equal(moonstone.externalLabel, undefined);
  assert.match(moonstone.imageNote ?? "", /public/i);
  assert.match(moonstone.imageNote ?? "", /not.*admin/i);
  assert.equal(ecommerce, undefined);
});

test("contact, work history and skills supply the homepage without placeholder records", () => {
  assert.ok(profile.name.trim());
  assert.ok(profile.location.trim());
  assert.equal(profile.socials.length, 3);
  for (const social of profile.socials) {
    assert.ok(social.name.trim());
    assert.equal(new URL(social.href).protocol, "https:");
  }
  assert.deepEqual(
    experiences.map(({ company }) => company),
    ["Focal Studio · Product Design & Development", "Lunim Studio / Tabb"],
  );
  assert.equal(experiences[0].role, "Software Engineer");
  for (const experience of experiences) {
    assert.ok(experience.role && experience.company && experience.period);
    assert.ok(experience.details.length > 0);
  }
  assert.ok(skillGroups.length > 0);
  assert.ok(
    skillGroups.every(({ label, items }) => label.trim() && items.length > 0),
  );
});
