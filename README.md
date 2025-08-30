# Double Degree Club Website

Official Repo for the Double Degree Club Website. 

## How to update content

Edit .mdx files under the website/src/markdown/ folder to update Constitution, About, or Resource pages. 

To update the Current Team page, add exec headhsots under the website/assets/headshots folder, and in website/src/app/current-team/page.tsx, add a new `<ProfileCard name="Exec Name" role="Role Title" contact="email@ddclub.ca" key={index} />` line.

## Running

node.js: `npm run dev`  
deno: `deno run dev`

## Contributors
- Samuel Bai (Webmaster S24)
- Peter Macdonald (Webmaster F24)
- Michelle Xu (Marketing Director S24/F24)
