# YSWS-Catalog

**YSWS-Catalog** is a web-based directory showcasing Hack Club’s "You Ship, We Ship" (YSWS) programs. Each YSWS program rewards participants for building and shipping projects—hardware, software, art, and more—by sending them physical or digital goodies. This repository hosts the source code for the catalog, allowing anyone to explore, filter, and learn about these initiatives. If you want to add or update a program, feel free to submit a pull request!

## Features

- **Dynamic Program Listing:** All YSWS programs are defined in `script.js` for easy editing.
- **Filtering by Status:** Quickly filter programs by `All`, `Active`, `Upcoming`, or `Completed`.

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/PawiX25/YSWS-Catalog.git
   cd YSWS-Catalog
   ```

2. **Open the catalog:**
   - Open `index.html` in your web browser.
   - Ensure `styles.css` and `script.js` are in the same directory.

3. **Filter Programs:**
   - Use the top buttons (`All`, `Active`, `Upcoming`, `Completed`) to filter the displayed programs.

## Project Structure

- **index.html:** The main HTML file containing the container for program cards.
- **styles.css:** Styles for the layout, cards, typography, and responsiveness.
- **script.js:** Contains the programs data and logic for:
  - Rendering program cards
  - Counting active programs
  - Filtering by program status

## Data Source & Example

All programs are defined in the `programs` object inside `script.js`. They are categorized into arrays such as `indefinite`, `limitedTime`, `upcoming`, `additional`, `noYouShip`, and `completed`.

Each program object can include:

- **Required Fields:**
  - `name`: Program name
  - `description`: Short description of the program
  - `status`: `active`, `upcoming`, or `completed`

- **Optional Fields:**
  - `website`: URL or `null`
  - `slack`: Slack channel URL or `null`
  - `slackChannel`: Slack channel name or `null`
  - `deadline`: When the program ends (for active/upcoming time-limited programs)
  - `ended`: When the program ended (for completed programs)

### Real Example From This Repository

Below is an example from the `limitedTime` category in `script.js`:

```js
{
    name: "HackCraft",
    description: "Create a Minecraft mod, and Hack Club sends you Minecraft Java! Ends January 31st, 2025.",
    website: null,
    slack: "https://slack.com/archives/C07NQ5QAYNQ",
    slackChannel: "#mc-modding",
    status: "active",
    deadline: "Ends January 31st, 2025"
}
```

## Contributing

1. **Fork this repository.**
2. **Create a new branch** for your changes:
   ```bash
   git checkout -b add-new-program
   ```
3. **Add or update a program:**  
   Edit `script.js` and modify the `programs` object.
4. **Commit and push your changes:**
   ```bash
   git commit -m "Add a new YSWS program"
   git push origin add-new-program
   ```
5. **Open a Pull Request:**  
   On GitHub, open a PR from your fork to this repository and provide a description of your changes.
