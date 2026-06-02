/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface InquiryForm {
  fullName: string;
  email: string;
  focus: 'aviation' | 'horology' | 'dual';
  location: 'Monaco' | 'London' | 'Geneva' | 'Other';
  estimatedNetWorth: string;
  specificRequirements: string;
  phone: string;
  disclaimerAccepted: boolean;
}

export interface JetAsset {
  id: string;
  model: string;
  range: string;
  capacity: string;
  hourlyRate: string;
  marketRate: string;
  description: string;
  availability: string;
}

export interface WatchAsset {
  id: string;
  brand: string;
  model: string;
  reference: string;
  year: string;
  condition: string;
  estimatedValue: string;
  scarcityIndex: string;
  description: string;
}

export interface Testimonial {
  location: string;
  quote: string;
  clientType: string;
}
