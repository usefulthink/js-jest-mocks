/**
 * Copyright 2022 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { MVCObject } from "../../maps/event/mvcobject";

export class DataPolygon extends MVCObject implements google.maps.Data.Polygon {
  constructor(
    elements?: Array<
      | google.maps.Data.LinearRing
      | Array<google.maps.LatLng | google.maps.LatLngLiteral>
    >
  ) {
    super();
  }
  public forEachLatLng = jest.fn(
    (callback: (a: google.maps.LatLng) => void): void => {
      return null;
    }
  );

  // fixme: returning MVCArray is wrong
  public getArray = jest.fn((): google.maps.Data.LinearRing[] => []);
  public getAt = jest.fn((): google.maps.Data.LinearRing | null => null);
  public getLength = jest.fn(() => 0);
  public getType = jest.fn(() => "Polygon");
}
