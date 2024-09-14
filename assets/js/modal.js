document.addEventListener('DOMContentLoaded', function () {
    var myModal = new bootstrap.Modal(document.getElementById('quoteModal'));

    // Initialize the Bootstrap popover for category selection
    var categoryField = document.getElementById('category');
    var categoryDropdown = document.getElementById('category-dropdown');

    categoryField.addEventListener('click', function () {
        categoryDropdown.style.display = categoryDropdown.style.display === 'block' ? 'none' : 'block';
    });

    categoryDropdown.querySelectorAll('.dropdown-item').forEach(function (item) {
        item.addEventListener('click', function () {
            var selectedCategory = this.getAttribute('data-value');
            categoryField.value = this.textContent;
            categoryDropdown.style.display = 'none';
            showSubcategories(selectedCategory);
        });
    });

    // Subcategories for each category
    const subcategories = {
        branding: ['Vehicle branding', 'Mugs', 'T-shirts', 'Water bottles', 'Pens', 'Keyholders', 'Face caps', 'Monogram', 'Screen print', 'UV direct print'],
        printing: [ 'Flyers', 'Jotters', 'Programs', 'Brochures', 'Business cards', 'ID cards', 'Customized printing solutions'],
        packaging: ['Boxes', 'Food packs', 'Pizza packs', 'Platter packs', 'Custom packaging solutions'],
        publishing: [ 'Stationaries', 'Journals', 'Storybooks', 'Novels', 'Christian books', 'Publishing codes']
    };

    function showSubcategories(category) {
        const subcategoryContainer = document.getElementById('subcategory-container');
        subcategoryContainer.innerHTML = '';
        subcategoryContainer.style.display = 'none';

        if (subcategories[category]) {
            const subcategoryLabel = document.createElement('label');
            subcategoryLabel.textContent = 'Select Subcategories';
            subcategoryContainer.appendChild(subcategoryLabel);

            const subcategoryChecklist = document.createElement('div');
            subcategoryChecklist.classList.add('form-check');

            subcategories[category].forEach(subcategory => {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.classList.add('form-check-input');
                checkbox.id = subcategory;
                checkbox.name = 'subcategories';
                checkbox.value = subcategory;

                const label = document.createElement('label');
                label.classList.add('form-check-label');
                label.setAttribute('for', subcategory);
                label.textContent = subcategory;

                subcategoryChecklist.appendChild(checkbox);
                subcategoryChecklist.appendChild(label);
                subcategoryChecklist.appendChild(document.createElement('br'));
            });

            subcategoryContainer.appendChild(subcategoryChecklist);
            subcategoryContainer.style.display = 'block';
        }
    }

    // Form submission handling (optional)
    document.getElementById('quoteForm').addEventListener('submit', function (event) {
        event.preventDefault();
        // Handle form submission (e.g., via AJAX)
        myModal.hide();
        alert('Quote request submitted successfully!');
    });
});
