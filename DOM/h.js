
        // Setup Grid Container
        const container = document.getElementById('container');
        container.style.display = 'grid';
        container.style.gridTemplateColumns = '250px 1fr';
        container.style.gridTemplateRows = 'auto 1fr auto';
        container.style.gridTemplateAreas = `
            "header header"
            "sidebar main"
            "footer footer"
        `;
        container.style.minHeight = '100vh';
        container.style.gap = '0';

        // Reset body margin
        document.body.style.margin = '0';
        document.body.style.fontFamily = 'Arial, sans-serif';

        // Header Styling
        const header = document.getElementById('header');
        header.style.gridArea = 'header';
        header.style.backgroundColor = '#2c3e50';
        header.style.color = 'white';
        header.style.padding = '1rem 2rem';
        header.style.display = 'flex';
        header.style.justifyContent = 'space-between';
        header.style.alignItems = 'center';
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';

        // Header h1
        const headerTitle = header.querySelector('h1');
        headerTitle.style.margin = '0';
        headerTitle.style.fontSize = '1.5rem';

        // Navigation
        const nav = document.getElementById('nav');
        nav.style.display = 'flex';
        nav.style.gap = '1.5rem';

        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.style.color = 'white';
            link.style.textDecoration = 'none';
            link.style.padding = '0.5rem 1rem';
            link.style.borderRadius = '4px';
            link.style.transition = 'background-color 0.3s';
            
            link.addEventListener('mouseenter', () => {
                link.style.backgroundColor = '#34495e';
            });
            
            link.addEventListener('mouseleave', () => {
                link.style.backgroundColor = 'transparent';
            });
        });

        // Sidebar Styling
        const sidebar = document.getElementById('sidebar');
        sidebar.style.gridArea = 'sidebar';
        sidebar.style.backgroundColor = '#ecf0f1';
        sidebar.style.padding = '2rem 1rem';
        sidebar.style.borderRight = '1px solid #bdc3c7';

        const sidebarTitle = sidebar.querySelector('h3');
        sidebarTitle.style.marginTop = '0';
        sidebarTitle.style.color = '#2c3e50';
        sidebarTitle.style.borderBottom = '2px solid #3498db';
        sidebarTitle.style.paddingBottom = '0.5rem';

        const menu = document.getElementById('menu');
        menu.style.listStyle = 'none';
        menu.style.padding = '0';

        const menuItems = menu.querySelectorAll('li');
        menuItems.forEach(item => {
            item.style.marginBottom = '0.5rem';
            
            const link = item.querySelector('a');
            link.style.display = 'block';
            link.style.padding = '0.75rem';
            link.style.textDecoration = 'none';
            link.style.color = '#2c3e50';
            link.style.borderRadius = '6px';
            link.style.transition = 'all 0.3s';
            
            link.addEventListener('mouseenter', () => {
                link.style.backgroundColor = '#3498db';
                link.style.color = 'white';
                link.style.transform = 'translateX(5px)';
            });
            
            link.addEventListener('mouseleave', () => {
                link.style.backgroundColor = 'transparent';
                link.style.color = '#2c3e50';
                link.style.transform = 'translateX(0)';
            });
        });

        // Main Content Styling
        const main = document.getElementById('main');
        main.style.gridArea = 'main';
        main.style.padding = '2rem';
        main.style.backgroundColor = '#ffffff';

        const mainTitle = main.querySelector('h2');
        mainTitle.style.color = '#2c3e50';
        mainTitle.style.marginBottom = '2rem';
        mainTitle.style.fontSize = '2rem';

        // Stats Section
        const stats = document.getElementById('stats');
        stats.style.display = 'grid';
        stats.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
        stats.style.gap = '1rem';
        stats.style.marginBottom = '2rem';

        const statCards = stats.querySelectorAll('.stat-card');
        statCards.forEach(card => {
            card.style.backgroundColor = '#f8f9fa';
            card.style.padding = '1.5rem';
            card.style.borderRadius = '8px';
            card.style.textAlign = 'center';
            card.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            card.style.transition = 'transform 0.3s';
            
            const cardTitle = card.querySelector('h3');
            cardTitle.style.margin = '0 0 0.5rem 0';
            cardTitle.style.color = '#7f8c8d';
            cardTitle.style.fontSize = '0.9rem';
            
            const cardValue = card.querySelector('p');
            cardValue.style.margin = '0';
            cardValue.style.fontSize = '1.8rem';
            cardValue.style.fontWeight = 'bold';
            cardValue.style.color = '#2c3e50';
            
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-5px)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        });

        // Content Section
        const content = document.getElementById('content');
        content.style.backgroundColor = '#f1f2f6';
        content.style.padding = '1.5rem';
        content.style.borderRadius = '8px';
        content.style.lineHeight = '1.6';

        const contentParagraph = content.querySelector('p');
        contentParagraph.style.color = '#2c3e50';
        contentParagraph.style.marginBottom = '1rem';

        // Button
        const btn = document.getElementById('btn');
        btn.style.backgroundColor = '#3498db';
        btn.style.color = 'white';
        btn.style.border = 'none';
        btn.style.padding = '0.75rem 1.5rem';
        btn.style.fontSize = '1rem';
        btn.style.borderRadius = '6px';
        btn.style.cursor = 'pointer';
        btn.style.transition = 'all 0.3s';

        btn.addEventListener('mouseenter', () => {
            btn.style.backgroundColor = '#2980b9';
            btn.style.transform = 'scale(1.05)';
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.backgroundColor = '#3498db';
            btn.style.transform = 'scale(1)';
        });

        btn.addEventListener('click', () => {
            btn.style.animation = 'none';
            btn.offsetHeight; // Trigger reflow
            btn.style.animation = 'pulse 0.3s';
            alert('Button clicked! 🎉');
        });

        // Add pulse animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.1); }
                100% { transform: scale(1); }
            }
        `;
        document.head.appendChild(style);

        // Footer Styling
        const footer = document.getElementById('footer');
        footer.style.gridArea = 'footer';
        footer.style.backgroundColor = '#34495e';
        footer.style.color = 'white';
        footer.style.textAlign = 'center';
        footer.style.padding = '1rem';

        const footerText = footer.querySelector('p');
        footerText.style.margin = '0';

        // Responsive behavior
        function handleResize() {
            if (window.innerWidth < 768) {
                container.style.gridTemplateColumns = '1fr';
                container.style.gridTemplateAreas = `
                    "header"
                    "sidebar"
                    "main"
                    "footer"
                `;
                sidebar.style.borderRight = 'none';
                sidebar.style.borderBottom = '1px solid #bdc3c7';
            } else {
                container.style.gridTemplateColumns = '250px 1fr';
                container.style.gridTemplateAreas = `
                    "header header"
                    "sidebar main"
                    "footer footer"
                `;
                sidebar.style.borderRight = '1px solid #bdc3c7';
                sidebar.style.borderBottom = 'none';
            }
        }

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial call

        console.log('🚀 Grid layout loaded successfully!');