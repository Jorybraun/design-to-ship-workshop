#!/usr/bin/env python3
"""Assemble the reviewed static deployment package for the workshop.

The package includes the plain HTML lesson pages, shared CSS and logos,
and documentation. It excludes the React reference app build, dependencies,
maintenance tests, local configuration, and unreviewed .devin/ contents.
"""

import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SITE = ROOT / "site"

# Directories to copy in full
PHASE_DIRS = [
    "phase-1-idea",
    "phase-2-spec",
    "phase-3-prototype",
    "phase-4-plan",
    "phase-5-build",
    "phase-6-ship",
    "skills",
]

# Root documentation and entry
ROOT_FILES = [
    "index.html",
    "README.md",
    "AGENTS.md",
    "WORKSHOP.md",
    "agent-prompting-foundations.md",
]

# Shared assets used by the lesson pages
ASSET_FILES = [
    "website/src/index.css",
    "website/public/cognition-mark.svg",
    "website/public/devin-mark.svg",
    "website/public/favicon.svg",
]


def copy(src: Path, dst: Path) -> None:
    if not src.exists():
        raise FileNotFoundError(src)
    dst.parent.mkdir(parents=True, exist_ok=True)
    if src.is_dir():
        shutil.copytree(src, dst, dirs_exist_ok=True)
    else:
        shutil.copy2(src, dst)


def build() -> Path:
    if SITE.exists():
        shutil.rmtree(SITE)
    SITE.mkdir(parents=True, exist_ok=True)

    for directory in PHASE_DIRS:
        copy(ROOT / directory, SITE / directory)

    for file in ROOT_FILES:
        copy(ROOT / file, SITE / file)

    for asset in ASSET_FILES:
        copy(ROOT / asset, SITE / asset)

    # Exclude internal maintenance tooling from the deployable artifact
    for unwanted in ["phase-2-spec/test_materials.py", "phase-2-spec/__pycache__"]:
        target = SITE / unwanted
        if target.exists():
            if target.is_dir():
                shutil.rmtree(target)
            else:
                target.unlink()

    files = sorted(p.relative_to(SITE) for p in SITE.rglob("*") if p.is_file())
    (SITE / "MANIFEST.txt").write_text("\n".join(str(f) for f in files) + "\n")
    print(f"Assembled {len(files)} files into {SITE}")
    return SITE


if __name__ == "__main__":
    build()
