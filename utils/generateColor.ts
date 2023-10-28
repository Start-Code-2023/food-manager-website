export default function getRandomDarkColor(): string {
    const letters: string = '0123456789ABCDEF';
    let color: string = '#';
    
    // Generating a dark color by limiting the range of hex values
    for (let i = 0; i < 3; i++) {
      color += letters[Math.floor(Math.random() * 6) + 9]; // Start from 9 (darker hex values)
    }
  
    return color;
}