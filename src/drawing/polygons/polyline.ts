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
import { MVCArray } from "../../maps/event/mvcarray";

export class Polyline extends MVCObject implements google.maps.Polyline {
  constructor(opts?: google.maps.PolylineOptions | null) {
    super();
  }

  public getDraggable = jest.fn(() => false);
  public getEditable = jest.fn(() => false);
  public getMap = jest.fn((): google.maps.Map | null => null);
  public getPath = jest.fn(
    (): google.maps.MVCArray<google.maps.LatLng> => new MVCArray()
  );
  public getVisible = jest.fn(() => false);
  public setDraggable = jest.fn((draggable: boolean): void => {});
  public setEditable = jest.fn((editable: boolean): void => {});
  public setMap = jest.fn((map: google.maps.Map | null): void => {});
  public setOptions = jest.fn(
    (options: google.maps.PolylineOptions | null): void => {}
  );
  public setPath = jest.fn(
    (
      path:
        | google.maps.MVCArray<google.maps.LatLng>
        | Array<google.maps.LatLng | google.maps.LatLngLiteral>
    ): void => {}
  );
  public setVisible = jest.fn((visible: boolean): void => {});
}
