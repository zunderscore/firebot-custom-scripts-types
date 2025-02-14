import { Effects } from "./effects";
import Trigger = Effects.Trigger;
import TriggerType = Effects.TriggerType;
import TriggersObject = Effects.TriggersObject;

interface RestrictionScope<RestrictionModel> extends ng.IScope {
  restriction: RestrictionType<RestrictionModel>;
  [x: string]: unknown;
}

export type RestrictionType<RestrictionModel> = {
  definition: {
    id: string;
    name: string;
    description: string;
    triggers?: TriggerType[] | TriggersObject;
  };
  optionsTemplate: string;
  optionsController?: (
    $scope: RestrictionScope<RestrictionModel>,
    ...args: unknown[]
  ) => void;
  optionsValueDisplay?: (
    restriction: RestrictionModel,
    ...args: unknown[]
  ) => string;
  predicate(
    triggerData: Trigger,
    restrictionData: RestrictionModel
  ): boolean | Promise<boolean>;
};
