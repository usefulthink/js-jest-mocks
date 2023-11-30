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

import { ControlPosition } from "../../maps/controls/controlposition";
import { MVCObject } from "../../maps/event/mvcobject";
import { Feature } from "./data.feature";
import { DataPolygon } from "./data.polygon";

export class Data extends MVCObject implements google.maps.Data {
  public static Feature = Feature;
  public static Polygon = DataPolygon;

  constructor(opt?: google.maps.Data.DataOptions | null) {
    super();
  }

  public add = jest.fn(
    (
      feature?:
        | google.maps.Data.Feature
        | null
        | google.maps.Data.FeatureOptions
    ): google.maps.Data.Feature => null
  );

  public addGeoJson = jest.fn(
    (
      geoJson: object,
      options?: google.maps.Data.GeoJsonOptions | null
    ): google.maps.Data.Feature[] => []
  );

  public contains = jest.fn((feature: google.maps.Data.Feature) => false);

  public forEach = jest.fn(
    (callback: (a: google.maps.Data.Feature) => void): void => {}
  );

  public getControlPosition = jest.fn((): google.maps.ControlPosition => {
    return ControlPosition.BOTTOM_CENTER;
  });

  public getControls = jest.fn((): string[] | null => []);

  public getDrawingMode = jest.fn((): string | null => null);

  public getFeatureById = jest.fn(
    (id: number | string): google.maps.Data.Feature | undefined => undefined
  );

  public getMap = jest.fn((): google.maps.Map | null => null);

  public getStyle = jest.fn(
    ():
      | google.maps.Data.StylingFunction
      | google.maps.Data.StyleOptions
      | null => null
  );

  public loadGeoJson = jest.fn(
    (
      url: string,
      options?: google.maps.Data.GeoJsonOptions | null,
      callback?: (a: google.maps.Data.Feature[]) => void
    ): void => {}
  );

  public overrideStyle = jest.fn(
    (
      feature: google.maps.Data.Feature,
      style: google.maps.Data.StyleOptions
    ): void => {}
  );

  public remove = jest.fn((feature: google.maps.Data.Feature): void => {});

  public revertStyle = jest.fn(
    (feature?: google.maps.Data.Feature | null): void => {}
  );

  public setControlPosition = jest.fn(
    (controlPosition: google.maps.ControlPosition): void => {}
  );

  public setControls = jest.fn((controls: string[] | null): void => {});

  public setDrawingMode = jest.fn((drawingMode: string | null): void => {});

  public setMap = jest.fn((map: google.maps.Map | null): void => {});

  public setStyle = jest.fn(
    (
      style:
        | google.maps.Data.StylingFunction
        | google.maps.Data.StyleOptions
        | null
    ): void => {}
  );

  public toGeoJson = jest.fn((callback: (a: object) => void): void => {});
}
