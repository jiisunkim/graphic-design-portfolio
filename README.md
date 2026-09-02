# Random Joke Generator

A fun and simple web application that fetches random jokes from an external API and displays them on the screen.

## Features

- 🎯 Fetches random jokes from the Official Joke API
- 📋 Copy joke to clipboard with one click
- 🎨 Beautiful gradient UI with smooth animations
- ⚡ Fast and responsive design
- 📱 Mobile-friendly interface
- 🔄 Error handling for API failures

## Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling and animations
- **JavaScript (ES6+)** - Interactivity and API integration
- **Official Joke API** - External API for jokes

## API Used

[Official Joke API](https://official-joke-api.appspot.com/)

Endpoint: `https://official-joke-api.appspot.com/random_joke`

Returns a random joke with:
- `setup` - The setup/beginning of the joke
- `punchline` - The punchline/ending of the joke

## How to Use

1. Open `index.html` in your web browser
2. Click the "Get a Joke" button to fetch a random joke
3. Click "Copy Joke" to copy the joke to your clipboard
4. Repeat step 2 to get more jokes!

## File Structure

```
.
├── index.html       # Main HTML file
├── styles.css       # Styling and animations
├── script.js        # JavaScript logic and API calls
└── README.md        # This file
```

## Features Explained

### Joke Fetching
The app uses the Fetch API to retrieve random jokes asynchronously from the Official Joke API.

### Error Handling
If the API fails to respond, users see a friendly error message instead of broken functionality.

### Copy to Clipboard
Users can easily share jokes by copying them to their clipboard with visual feedback.

### Responsive Design
The interface adapts to different screen sizes for a great experience on desktop, tablet, and mobile devices.

## Future Enhancements

- Add different joke categories
- Store favorite jokes in local storage
- Search jokes by keyword
- Dark mode toggle
- Share jokes on social media

## License

This project is open source and available under the MIT License.
