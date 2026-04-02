/* ===== PROJECT DATA ===== */
const projects = [
    {
        name: "Utica Avenue Line",
        borough: "Brooklyn",
        lines: ["4"], 
        image: "https://i.postimg.cc/HLQdcHnY/6-Extension.png",
        location: "Brooklyn - Southeastern",
        alignment: "Utica Avenue from Flatbush Avenue to Kings Plaza",
        stations: "8 new stations (Empire Blvd, Clarkson Ave, Church Ave, Clarendon Rd, Utica Ave-Kings Hwy, Flatlands Ave, Ave N, Kings Plaza-Ave U)",
        civilWorks: "New tunnel from Eastern Parkway to Kings Highway; elevated segment from Kings Highway to Kings Plaza",
        housing: "17,314 units (10.36% of program total); 1,458 affordable units (8.42%)",
        transfers: "Interborough Express X line",
        cost: "$5.9 billion (2025 dollars)"
    },
    {
        name: "Second Avenue Line Phase 2 Western Extension",
        borough: "Manhattan",
        lines: ["Q"],
        image: "https://i.postimg.cc/Zqr4BZnx/SAS_Phase_2.png",
        location: "Manhattan - Harlem (125th Street)",
        alignment: "125th Street from Lexington Avenue to Broadway",
        stations: "3 new stations (125 St-Malcolm X Blvd, 125 St-St. Nicholas Ave, 125 St-Broadway)",
        civilWorks: "Tunneling from Malcolm X Blvd to 125th Street and Broadway; reuse of Phase 2 TBMs",
        housing: "15,007 units total; 5,675 affordable units (37.82%)",
        transfers: "1 line, 2/3 lines, and A/B/C/D lines",
        cost: "$3.4 billion (2025 dollars)"
    },
    {
        name: "QueensLink (Rockaway Branch Reactivation)",
        borough: "Queens",
        lines: ["M"],
        image: "https://i.postimg.cc/CKjSBY5N/Queenslink.png",
        location: "Queens - Central/Southeastern",
        alignment: "Queens Boulevard Line to Rockaway Branch via new tunnel under Rego Park",
        stations: "4 new stations (Metropolitan Ave-Parkside Ave, Jamaica Ave-104 St, Atlantic Ave-Woodhaven, Liberty Ave-Rockaway Blvd)",
        civilWorks: "Pair of new tunnels between 63 Drive-Rego Park and Metropolitan Ave-Parkside Ave stations",
        housing: "4,806 units total; 393 affordable units (8.18%)",
        transfers: "J/Z lines and A line (at Rockaway)",
        cost: "$2.8 billion (2025 dollars)"
    },
    {
        name: "Long Island Expressway Line",
        borough: "Queens",
        lines: ["W", "V"], // Updated to W and V
        image: "https://i.postimg.cc/CKjSBY5b/Long-Island-Express-LIne.png",
        location: "Queens - Mid/East Queens",
        alignment: "63rd Street Tunnel Provisions - LIRR Main Line - LIE to 188th Street",
        stations: "10 new stations (46th St, 51st Ave, Woodhaven Blvd, 99th St, 108th St, Main St, Kissena Blvd-Queens College, 164th St, Utopia Pkwy, 188th St)",
        civilWorks: "Tunnel from 63rd Street Tunnel; portal and viaduct along Queens Blvd; elevated viaduct on the LIE",
        housing: "32,053 units total; 9,847 affordable units (30.72%)",
        transfers: "7 train, E/F/M/G/R trains",
        cost: "$7.1 billion (2025 dollars)"
    },
    {
        name: "Co-Op City Extension (6 Line)",
        borough: "The Bronx",
        lines: ["6", "6d"], // Added '6d' for the diamond express 6
        image: "https://i.postimg.cc/HLQdcHnY/6-Extension.png",
        location: "The Bronx - North Bronx",
        alignment: "Fully elevated from Pelham Bay Park to Bartow Avenue",
        stations: "2 new stations (Erskine Place and Bartow Avenue-Co-Op City)",
        civilWorks: "Concrete viaduct east of I-95 alignment to Bartow Avenue",
        housing: "1,100 units total; 113 affordable units (10.27%)",
        transfers: "Metro North Railroad Co-Op City Station (Penn Access)",
        cost: "$1 billion (2025 dollars)"
    },
    {
        name: "F Extension to Queens Village-Springfield",
        borough: "Queens",
        lines: ["F"],
        image: "https://i.postimg.cc/8ChNJDcJ/F-Extension.png",
        location: "Queens - Eastern (Hillside Avenue)",
        alignment: "Hillside Avenue from 179th Street to Springfield Boulevard",
        stations: "4 new stations (188-191 St, Francis Lewis Blvd, 214th St, Queens Village-Springfield Blvd)",
        civilWorks: "Tunneling under Hillside Avenue to Francis Lewis Boulevard; viaduct to Springfield Boulevard",
        housing: "7,407 units total; 183 affordable units (2.47%)",
        transfers: "System extension (no direct transfers)",
        cost: "$3.1 billion (2025 dollars)"
    },
    {
        name: "Second Avenue Line Phases 3 & 4 (Downtown)",
        borough: "Manhattan",
        lines: ["T", "V"], // Updated to T and V
        image: "https://i.postimg.cc/MGyqMxH9/SAS-Phase-3-4.png",
        location: "Manhattan - Midtown to Lower Manhattan",
        alignment: "55th Street to Broad Street via 2nd Avenue, Christie Street, Park Row, and Broad Street",
        stations: "10 new stations (55th St, 42nd St-UN, 34th St, 23rd St, 14th St, Houston St-2nd Ave, Grand St-Bowery, Chatham Square, Fulton St, Broad St)",
        civilWorks: "Phase 3 and Phase 4 to Chatham Square; merge into Nassau Street Line; extend Fulton/Broad platforms",
        housing: "19,985 units total; 4,872 affordable units (24.38%)",
        transfers: "J/Z Lines, B/D/F/M Lines, L Line, A/C/2/3/4/5 Lines",
        cost: "$9.3 billion (2025 dollars)"
    },
    {
        name: "7 Line Extension to Northern Boulevard",
        borough: "Queens",
        lines: ["7"],
        image: "https://i.postimg.cc/1zpsnPX8/7-Extension.png",
        location: "Queens - Flushing Extension",
        alignment: "Roosevelt Avenue to 162nd Street-Northern Boulevard",
        stations: "2 new stations (149th Street-Murray Hill, 162nd Street-East Flushing)",
        civilWorks: "Tunneling under Roosevelt Avenue; tail tracks east of 162nd Street Station",
        housing: "7,604 units total; 1,013 affordable units (13.32%)",
        transfers: "LIRR Port Washington Branch",
        cost: "$2.3 billion (2025 dollars)"
    },
    {
        name: "E Line Extension to Springfield Boulevard",
        borough: "Queens",
        lines: ["E"],
        image: "https://i.postimg.cc/0NpPMxj6/E-Extension.png",
        location: "Queens - Southeast Queens",
        alignment: "LIRR Atlantic Branch east of Jamaica station to Laurelton-Springfield Boulevard",
        stations: "5 new stations (109 Ave, Linden Blvd-Cedar Manor, Baisley Blvd, Farmers Blvd-Locust Manor, Laurelton-Springfield Blvd)",
        civilWorks: "Portal connection of tunnel to LIRR Atlantic Branch right-of-way; systems and signals conversion",
        housing: "18,245 units total; 4,288 affordable units (23.50%)",
        transfers: "System extension (no direct transfers)",
        cost: "$1.7 billion (2025 dollars)"
    },
    {
        name: "Cross-Bronx Express Line",
        borough: "The Bronx",
        lines: ["12"], // Updated to the '12' combined badge
        image: "https://i.postimg.cc/YCKP4FW6/CBX.png",
        location: "The Bronx - East-West Crosstown",
        alignment: "225 Street to Kingsbridge Rd - Fordham Rd - Pelham Bay Parkway",
        stations: "11 new stations (Marble Hill, Sedgewick Ave, Jerome Ave, Grand Concourse, Third Ave, Southern Blvd, White Plains Rd, Williamsbridge Rd, Neill Ave, Eastchester Rd, Erskine Place-Co-Op City South)",
        civilWorks: "Tunnel between Sedgewick Avenue and Crotona Avenue; automated light metro design",
        housing: "35,903 units total; 10,660 affordable units (29.69%)",
        transfers: "1, 4, B/D, 2, 5, 6, and Metro North Rail Road",
        cost: "$6.4 billion (2025 dollars)"
    },
    {
        name: "Subway to LaGuardia Airport",
        borough: "Queens",
        lines: ["N"], // Removed W, N only
        image: "https://i.postimg.cc/5twbY1yL/N-Extension.png",
        location: "Queens - Astoria to LaGuardia",
        alignment: "Astoria Line (N/W) extension via industrial zone north of 20th Avenue to airport terminals",
        stations: "5 new stations (Steinway Street, Hazen Street, LGA Terminal A, LGA Terminal B, LGA Terminal C)",
        civilWorks: "Viaduct extension along 31st Street and 19th Avenue; minor trenching near Runway 4/22",
        housing: "1,060 units total (0% affordable)",
        transfers: "System extension (airport service)",
        cost: "$2.5 billion (2025 dollars)"
    },
    {
        name: "Interborough Express (IBX) Extension to Astoria",
        borough: "Queens",
        lines: ["X"], // Changed to standard X
        image: "https://i.postimg.cc/6Qdt2wqy/IBX-to-Astoria.png",
        location: "Queens - Jackson Heights to Astoria",
        alignment: "CSX Fremont Secondary - BQE - Astoria Boulevard",
        stations: "3 new stations (Northern Boulevard, Steinway Street, Astoria Boulevard)",
        civilWorks: "Tunnels under Astoria Boulevard and sides of BQE; grade separation improvements",
        housing: "6,580 units total; 263 affordable units (4.00%)",
        transfers: "N/W Line",
        cost: "$2.4 billion (2025 dollars)"
    }
];

/* ===== FUNCTION: MAPPING LINES TO COLORS & CUSTOM LABELS/ICONS ===== */
function getLineData(line) {
    const lineDataMap = {
        'A': { label: 'A', color: '#0039A6' }, 'C': { label: 'C', color: '#0039A6' }, 'E': { label: 'E', color: '#0039A6' }, 
        'B': { label: 'B', color: '#FF6319' }, 'D': { label: 'D', color: '#FF6319' }, 'F': { label: 'F', color: '#FF6319' }, 'M': { label: 'M', color: '#FF6319' }, 
        'G': { label: 'G', color: '#6CBE45' }, 
        'J': { label: 'J', color: '#996633' }, 'Z': { label: 'Z', color: '#996633' }, 
        'L': { label: 'L', color: '#A7A9AC' }, 
        'N': { label: 'N', color: '#FCCC0A' }, 'Q': { label: 'Q', color: '#FCCC0A' }, 'R': { label: 'R', color: '#FCCC0A' }, 'W': { label: 'W', color: '#FCCC0A' }, 
        '1': { label: '1', color: '#EE352E' }, '2': { label: '2', color: '#EE352E' }, '3': { label: '3', color: '#EE352E' }, 
        '4': { label: '4', color: '#00933C' }, '5': { label: '5', color: '#00933C' }, '6': { label: '6', color: '#00933C' }, 
        '7': { label: '7', color: '#B933AD' }, 
        'T': { label: 'T', color: '#00ADD0' }, 
        
        // --- CUSTOM LINES ADDED BELOW ---
        'V': { label: 'V', color: '#00ADD0' },           // Teal V line
        'X': { label: 'X', color: '#D14197' },           // Magenta/Pink X for IBX
        '12': { label: '12', color: '#D7C677' },         // Red combined 12 for CBX
        '6d': { label: '6', color: '#00933C', shape: 'diamond' } // Express 6 Diamond
    };
    return lineDataMap[line] || { label: line, color: '#808183' };
}

/* ===== DYNAMIC CARD CREATION ===== */
/* 
   This function organizes all projects by borough and creates flip cards for each one
   It groups projects into borough categories and populates the corresponding grid sections
*/
function createProjectCards() {
    // Create an object to store projects grouped by borough
    const boroughGroups = {
        'Manhattan': [],
        'Brooklyn': [],
        'Queens': [],
        'The Bronx': []
    };

    // Loop through all projects and add them to their borough group
    projects.forEach(project => {
        if (boroughGroups[project.borough]) {
            boroughGroups[project.borough].push(project);
        }
    });

    // For each borough, find its grid and populate it with project cards
    Object.keys(boroughGroups).forEach(borough => {
        // Convert borough name to grid ID (e.g., 'The Bronx' -> 'the-bronx-grid')
        const gridId = borough.toLowerCase().replace(/\s+/g, '-') + '-grid';
        const grid = document.getElementById(gridId);

        // Skip if grid not found (prevents errors)
        if (!grid) return; 

        // Create and add a flip card for each project in this borough
        boroughGroups[borough].forEach(project => {
            grid.appendChild(createFlipCard(project));
        });
    });

    // Setup modal event listeners after all cards are created
    setupModalHandlers();
}

/* 
   Creates a single flip card element for a project
   This card shows the project image on front, and can reveal details when clicked
*/
function createFlipCard(project) {
    // Create the main card container
    const flipCard = document.createElement('div');
    flipCard.className = 'flip-card';
    // Store project data on the card element for later retrieval when clicked
    flipCard.setAttribute('data-project', JSON.stringify(project));

    // Inner container that holds front and back
    const flipCardInner = document.createElement('div');
    flipCardInner.className = 'flip-card-inner';

    // FRONT CARD - Shows project image
    const flipCardFront = document.createElement('div');
    flipCardFront.className = 'flip-card-front';

    // Add the project image
    const img = document.createElement('img');
    img.src = project.image;
    img.alt = project.name;
    img.className = 'project-image';
    flipCardFront.appendChild(img);

    // Add transit line badges (colored circles showing which subway lines serve this project)
    if (project.lines && project.lines.length > 0) {
        const badgeContainer = document.createElement('div');
        badgeContainer.className = 'badge-container';
        
        // Create a badge for each transit line
        project.lines.forEach(lineId => {
            // Get the color and label for this transit line
            const lineData = getLineData(lineId);
            const badge = document.createElement('span');
            badge.className = 'transit-badge';
            
            // Set badge text and background color
            badge.textContent = lineData.label;
            badge.style.backgroundColor = lineData.color;
            
            // SHAPE LOGIC: Determines if badge is diamond, circle, or pill-shaped
            // This mimics real NYC subway line markers
            if (lineData.shape === 'diamond') {
                // Diamond shape for express trains (e.g., 6 express)
                badge.classList.add('diamond');
            } else if (lineData.label && lineData.label.length <= 2) { 
                // Circle shape for single/double character lines (1-9, A-Z, or combined like '12')
                badge.classList.add('circle');
                
                // Reduce font size for 2-character labels so they fit nicely in the circle
                if(lineData.label.length === 2) {
                    badge.style.fontSize = '0.9em';
                }
            } else {
                // Pill shape for longer labels (rarely used)
                badge.classList.add('pill');
            }
            
            // TEXT COLOR LOGIC: Dark text on light backgrounds, white on dark
            // This ensures readability on all background colors
            if (['N', 'Q', 'R', 'W', '12'].includes(lineId)) {
                // Yellow NYC lines need dark text for contrast
                badge.style.color = '#000000';
            } else {
                // All other lines use white text
                badge.style.color = '#ffffff';
            }
            
            badgeContainer.appendChild(badge);
        });
        flipCardFront.appendChild(badgeContainer);
    }

    // Add the dark overlay with project name at the bottom of the image
    const overlay = document.createElement('div');
    overlay.className = 'project-overlay';
    const title = document.createElement('h2');
    title.className = 'project-title';
    title.textContent = project.name;
    overlay.appendChild(title);
    flipCardFront.appendChild(overlay);

    // BACK CARD - Shows project details (currently only used for hover flip)
    // This is kept for backward compatibility but modal is the primary way to view details
    const flipCardBack = document.createElement('div');
    flipCardBack.className = 'flip-card-back';

    // Create container for detail items
    const details = document.createElement('div');
    details.className = 'project-details';

    /* 
       Helper function to create a detail item (label + value pair)
       These appear on the back of the card when hovering
    */
    const createDetailItem = (label, value) => {
        const item = document.createElement('div');
        item.className = 'detail-item';
        
        const labelEl = document.createElement('div');
        labelEl.className = 'detail-label';
        labelEl.textContent = label;
        
        const valueEl = document.createElement('div');
        valueEl.className = 'detail-value';
        valueEl.textContent = value;
        
        item.appendChild(labelEl);
        item.appendChild(valueEl);
        return item;
    };

    // Add all detail items to the back of the card
    details.appendChild(createDetailItem('Location', project.location));
    details.appendChild(createDetailItem('Alignment', project.alignment));
    details.appendChild(createDetailItem('New Stations', project.stations));
    details.appendChild(createDetailItem('Civil Works', project.civilWorks));
    details.appendChild(createDetailItem('New Housing Access', project.housing));
    details.appendChild(createDetailItem('New Transfers', project.transfers));

    // Add cost estimate with special styling
    const costItem = document.createElement('div');
    costItem.className = 'detail-item cost-estimate';
    const costLabel = document.createElement('div');
    costLabel.className = 'detail-label';
    costLabel.textContent = 'Estimated Cost';
    const costValue = document.createElement('div');
    costValue.className = 'detail-value';
    costValue.textContent = project.cost;
    costItem.appendChild(costLabel);
    costItem.appendChild(costValue);
    details.appendChild(costItem);

    flipCardBack.appendChild(details);

    // Assemble the complete card structure
    flipCardInner.appendChild(flipCardFront);
    flipCardInner.appendChild(flipCardBack);
    flipCard.appendChild(flipCardInner);

    // Add click handler to open the modal when card is clicked
    flipCard.addEventListener('click', () => {
        openProjectModal(project);
    });

    return flipCard;
}

/* 
   Opens the project details modal with all information
   This function is called when a user clicks on a project card
*/
function openProjectModal(project) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');

    // Build the HTML content for the modal
    // Uses a 2-column grid layout for better visual organization
    // Cost estimate is full-width and emphasized at the bottom
    modalBody.innerHTML = `
        <!-- Project title in large text -->
        <div class="modal-title">${project.name}</div>
        
        <!-- 2-column grid for project details -->
        <div class="modal-detail-grid">
            <!-- Left column item: Location -->
            <div class="modal-detail-item">
                <div class="modal-detail-label">Location</div>
                <div class="modal-detail-value">${project.location}</div>
            </div>
            
            <!-- Right column item: Number of stations -->
            <div class="modal-detail-item">
                <div class="modal-detail-label">New Stations</div>
                <div class="modal-detail-value">${project.stations}</div>
            </div>
            
            <!-- Left column item: Line alignment -->
            <div class="modal-detail-item">
                <div class="modal-detail-label">Alignment</div>
                <div class="modal-detail-value">${project.alignment}</div>
            </div>
            
            <!-- Right column item: Major construction work -->
            <div class="modal-detail-item">
                <div class="modal-detail-label">Civil Works</div>
                <div class="modal-detail-value">${project.civilWorks}</div>
            </div>
            
            <!-- Left column item: Housing development potential -->
            <div class="modal-detail-item">
                <div class="modal-detail-label">New Housing Access</div>
                <div class="modal-detail-value">${project.housing}</div>
            </div>
            
            <!-- Right column item: Transit connections -->
            <div class="modal-detail-item">
                <div class="modal-detail-label">New Transfers</div>
                <div class="modal-detail-value">${project.transfers}</div>
            </div>
            
            <!-- Full-width cost estimate with special styling and top border separator -->
            <div class="modal-detail-item" style="grid-column: 1 / -1; border-top: 2px solid var(--border-color); padding-top: 15px;">
                <div class="modal-detail-label">Estimated Cost</div>
                <div class="modal-detail-value" style="font-weight: 600; font-size: 1.1em;">${project.cost}</div>
            </div>
        </div>
    `;

    // Show the modal by adding the .active class
    modal.classList.add('active');
}

/* 
   Closes the project details modal
   Called when user clicks X button, presses Escape, or clicks outside the modal
*/
function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    // Hide modal by removing the .active class
    modal.classList.remove('active');
}

/* 
   Sets up all event listeners for modal interaction
   This includes close button, overlay click, and keyboard escape key
*/
function setupModalHandlers() {
    const modal = document.getElementById('projectModal');
    const closeBtn = document.getElementById('closeModal');

    // Close modal when X button is clicked
    closeBtn.addEventListener('click', closeProjectModal);

    // Close modal when background overlay is clicked
    // Check if click target is the modal itself (not a child element)
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeProjectModal();
        }
    });

    // Close modal when Escape key is pressed
    // This provides a keyboard-friendly way to dismiss the modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeProjectModal();
        }
    });
}

/* 
   Initialize the page when DOM content is fully loaded
   This runs the card creation and all related setup
*/
document.addEventListener('DOMContentLoaded', createProjectCards);