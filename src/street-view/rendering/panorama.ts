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

import { LatLng } from "../../maps/coordinates/latlng";
import { MVCObject } from "../../maps/event/mvcobject";

export class StreetViewPanorama
  extends MVCObject
  implements google.maps.StreetViewPanorama
{
  public focus = jest.fn((): void => {});
  public controls: google.maps.MVCArray<HTMLElement>[] = [];

  public getLinks = jest.fn(
    (): (google.maps.StreetViewLink | null)[] | null => null
  );

  public getLocation = jest.fn(
    (): google.maps.StreetViewLocation => ({
      description: null,
      latLng: new LatLng(1, 1),
      pano: "pano",
      shortDescription: null,
    })
  );

  public getMotionTracking = jest.fn(() => false);
  public getPano = jest.fn(() => "pano");
  public getPhotographerPov = jest.fn(
    (): google.maps.StreetViewPov => ({ heading: 0, pitch: 0 })
  );
  public getPosition = jest.fn((): google.maps.LatLng | null => null);

  public getPov = jest.fn(
    (): google.maps.StreetViewPov => ({ heading: 0, pitch: 0 })
  );
  public getStatus = jest.fn(
    (): google.maps.StreetViewStatus => google.maps.StreetViewStatus.OK
  );
  public getVisible = jest.fn(() => true);
  public getZoom = jest.fn(() => 0);
  public registerPanoProvider = jest.fn(
    (
      provider: (a: string) => google.maps.StreetViewPanoramaData | null,
      opt_options?: google.maps.PanoProviderOptions
    ): void => {}
  );
  public setLinks = jest.fn(
    (links: (google.maps.StreetViewLink | null)[] | null): void => {}
  );
  public setMotionTracking = jest.fn((motionTracking: boolean): void => {});
  public setOptions = jest.fn(
    (options: google.maps.StreetViewPanoramaOptions | null): void => {}
  );
  public setPano = jest.fn((pano: string): void => {});
  public setPosition = jest.fn(
    (latLng: google.maps.LatLng | null | google.maps.LatLngLiteral): void => {}
  );
  public setPov = jest.fn((pov: google.maps.StreetViewPov): void => {});
  public setVisible = jest.fn((flag: boolean): void => {});
  public setZoom = jest.fn((zoom: number): void => {});
}
