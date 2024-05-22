/**
 * Converts degrees to radians.
 * @param degrees Angle in degrees.
 * @returns Angle in radians.
 */
export const degreesToRadians = (degrees: number): number => {
    return degrees * (Math.PI / 180);
  };
  
  /**
   * Converts radians to degrees.
   * @param radians Angle in radians.
   * @returns Angle in degrees.
   */
  export const radiansToDegrees = (radians: number): number => {
    return radians * (180 / Math.PI);
  };
  
  /**
   * Calculates the distance between two geographic coordinates.
   * Uses the Haversine formula to calculate the great-circle distance.
   * @param coord1 First coordinate as [longitude, latitude].
   * @param coord2 Second coordinate as [longitude, latitude].
   * @returns Distance in meters.
   */
  export const calculateDistance = (coord1: [number, number], coord2: [number, number]): number => {
    const R = 6371000; // Radius of the Earth in meters
    const dLat = degreesToRadians(coord2[1] - coord1[1]);
    const dLon = degreesToRadians(coord2[0] - coord1[0]);
    const lat1 = degreesToRadians(coord1[1]);
    const lat2 = degreesToRadians(coord2[1]);
  
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
    return R * c;
  };
  
  /**
   * Formats a coordinate as a string.
   * @param coord Coordinate as [longitude, latitude].
   * @returns Formatted string.
   */
  export const formatCoordinate = (coord: [number, number]): string => {
    return `(${coord[1].toFixed(6)}, ${coord[0].toFixed(6)})`;
  };
  
  /**
   * Checks if a point is within a given polygon.
   * @param point Point as [longitude, latitude].
   * @param polygon Array of coordinates representing the polygon.
   * @returns True if the point is inside the polygon, false otherwise.
   */
  export const isPointInPolygon = (point: [number, number], polygon: [number, number][]): boolean => {
    let isInside = false;
    const [x, y] = point;
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      const [xi, yi] = polygon[i];
      const [xj, yj] = polygon[j];
      const intersect = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
      if (intersect) isInside = !isInside;
    }
    return isInside;
  };
  