/** @license GPL-3.0-or-later
 *
 * Copyright(C) 2025 Hong Xu <hong@topbug.net>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

/** Generate the snapshot table from snapshot_versions.json. */

import fs from "fs";
import snapshotVersions from "../static/snapshot_versions.json" with { type: "json" };

const table =
  `
| Date | URL |
|------|-----|
` +
  snapshotVersions
    .sort()
    .reverse()
    .map(
      (date: string) =>
        `| ${date} | https://packages.delpa.org/snapshot/${date}/ |`,
    )
    .join("\n");

fs.writeFileSync("src/pages/_snapshot_versions.mdx", table);
