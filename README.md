# Temperature_Converter_Using_-HTML_-CSS_-and-Java-Script


This is a simple web-based temperature converter that allows users to convert temperatures between Celsius and Fahrenheit. The user can input a temperature and select either Celsius or Fahrenheit as the starting unit. The application then performs the conversion and displays the result.

## Features

- **Convert Between Celsius and Fahrenheit**: Users can input a temperature and select the unit (Celsius or Fahrenheit). The application will convert it to the other unit and display the result.
- **Extreme Temperature Warnings**: The application displays warnings for extremely high temperatures (above 1000°C or 1832°F).
- **Keyboard Accessibility**: Users can press the `Enter` key to perform the conversion without having to click the button.
- **Responsive Design**: The layout is simple and works across various screen sizes.

## How to Use

1. Open the webpage in a browser.
2. Enter a temperature in the input field.
3. Select the unit of the temperature (Celsius or Fahrenheit) from the dropdown.
4. Click the "Convert" button or press the `Enter` key.
5. The result will be displayed below the input fields.

## Installation and Setup

This project does not require any special installation. To use it:

1. Download the project files (HTML, CSS, and JavaScript).
2. Open the `index.html` file in any modern web browser.

### Folder Structure:

```plaintext
temperature-converter/
│
├── index.html      # Main HTML file
├── styles.css      # External CSS for styling
└── script.js       # JavaScript file for temperature conversion logic
```

## Code Overview

### HTML (`index.html`)
- Contains the structure of the temperature converter.
- Includes a simple form with an input field for the temperature and a dropdown to select the unit.

### CSS (`styles.css`)
- Defines the layout and design, including styles for input fields, buttons, and the overall page layout.
- Includes hover and focus effects for interactivity.

### JavaScript (`script.js`)
- Handles the conversion logic.
- Listens for the button click or the `Enter` key to trigger the conversion.
- Displays warnings for extremely high temperatures.

## Example

- **Input**: 34°C
- **Output**: 34°C is equal to 93.20°F.

## Accessibility

The converter is designed with accessibility in mind:
- Input fields and buttons have `aria-labels` for screen reader support.
- Supports keyboard interactions (conversion on pressing `Enter`).

## Future Improvements

- Add support for Kelvin conversions.
- Improve error handling for negative or invalid values.
- Create a more detailed design with advanced CSS transitions.

## This Tempreture Converter is developed by Eng. Ali Sena Danishwer

