# Viticulture Dashboard

## Overview

The Viticulture Dashboard is a geospatial analytics tool designed for precision agriculture in viticulture. It leverages Deck.gl for rich data visualizations on Google Maps, providing insights into various data layers such as pest distribution, soil quality, weather patterns, and temperature variations.

## Features

- **Pest Hexagon Layer**: Visualizes pest data using hexagonal binning.
- **Satellite Image Layer**: Displays satellite imagery of the vineyard.
- **Soil Scatterplot Layer**: Represents soil quality data using scatter plots.
- **Weather Line Layer**: Shows weather data using line segments.
- **Temperature Heatmap Layer**: Displays temperature variations using a heatmap.
- **Interactive Tooltips**: Provides detailed information on hover.
- **Layer Toggle and Controls**: Allows users to toggle layers and control visualization parameters.

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm (version 6 or later)
- Google Maps API Key

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/viticulture-dashboard.git
   cd viticulture-dashboard
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the root directory and add your Google Maps API key:

   ```bash
   REACT_APP_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
   ```

### Running the Application

1. **Start the Development Server**

   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000`.

## Project Structure

- `src/`
  - `components/`
    - `Controls.tsx`: Contains controls for toggling layers and setting parameters.
    - `GoogleMapComponent.tsx`: Wrapper component for the Google Maps instance.
    - `LayerComponent.tsx`: Main component for managing and rendering Deck.gl layers.
    - `TooltipComponent.tsx`: Component for displaying tooltips.
  - `layers/`
    - `PestHexagonLayer.ts`: Defines the Pest Hexagon Layer.
    - `SatelliteImageLayer.ts`: Defines the Satellite Image Layer.
    - `SoilScatterplotLayer.ts`: Defines the Soil Scatterplot Layer.
    - `TemperatureHeatmapLayer.ts`: Defines the Temperature Heatmap Layer.
    - `WeatherLineLayer.ts`: Defines the Weather Line Layer.
  - `services/`
    - `api.ts`: Contains API calls for fetching data.
  - `App.tsx`: Main application component.
  - `index.tsx`: Entry point of the application.

## Detailed Layer Descriptions

### PestHexagonLayer.ts

**Purpose**: Visualizes pest data using hexagonal binning.

**Key Props**:

- `data`: Array of pest data points.
- `getPosition`: Extracts position from data points.
- `getColorWeight`: Determines color intensity based on pest severity.
- `onHover`: Displays tooltip with pest information.

### SatelliteImageLayer.ts

**Purpose**: Displays satellite imagery of the vineyard.

**Key Props**:

- `imageUrl`: URL of the satellite image.
- `bounds`: Bounding box coordinates for the image.
- `onHover`: Displays tooltip with satellite image information.

### SoilScatterplotLayer.ts

**Purpose**: Represents soil quality data using scatter plots.

**Key Props**:

- `data`: Array of soil data points.
- `getPosition`: Extracts position from data points.
- `getRadius`: Determines radius of scatter plot points.
- `getColor`: Colors points based on soil quality.
- `onHover`: Displays tooltip with soil quality information.

### WeatherLineLayer.ts

**Purpose**: Shows weather data using line segments.

**Key Props**:

- `data`: Array of weather data points.
- `getSourcePosition`: Extracts start position from data points.
- `getTargetPosition`: Extracts end position from data points.
- `getColor`: Colors lines based on weather severity.
- `onHover`: Displays tooltip with weather data information.

### TemperatureHeatmapLayer.ts

**Purpose**: Displays temperature variations using a heatmap.

**Key Props**:

- `data`: Array of temperature data points.
- `getPosition`: Extracts position from data points.
- `getWeight`: Determines weight based on temperature.
- `onHover`: Displays tooltip with temperature information.

## Contributing

1. **Fork the repository**.
2. **Create a new branch**:

   ```bash
   git checkout -b feature/your-feature
   ```

3. **Make your changes**.
4. **Commit your changes**:

   ```bash
   git commit -m 'Add some feature'
   ```

5. **Push to the branch**:

   ```bash
   git push origin feature/your-feature
   ```

6. **Create a pull request**.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Deck.gl](https://deck.gl)
- [Google Maps API](https://developers.google.com/maps)
- [React](https://reactjs.org)

