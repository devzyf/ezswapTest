// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: cMaVBwcHAKAbUiZW5BBnSf
// Component: s2Xq9QcLE2p
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: cMaVBwcHAKAbUiZW5BBnSf/projectcss
import * as sty from "./PlasmicSwitch.module.css"; // plasmic-import: s2Xq9QcLE2p/css

export type PlasmicSwitch__VariantMembers = {
  noLabel: "noLabel";
  isDisabled: "isDisabled";
  isChecked: "isChecked";
};

export type PlasmicSwitch__VariantsArgs = {
  noLabel?: SingleBooleanChoiceArg<"noLabel">;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
  isChecked?: SingleBooleanChoiceArg<"isChecked">;
};

type VariantPropType = keyof PlasmicSwitch__VariantsArgs;
export const PlasmicSwitch__VariantProps = new Array<VariantPropType>(
  "noLabel",
  "isDisabled",
  "isChecked"
);

export type PlasmicSwitch__ArgsType = {
  children?: React.ReactNode;
  name?: string;
  value?: string;
};

type ArgPropType = keyof PlasmicSwitch__ArgsType;
export const PlasmicSwitch__ArgProps = new Array<ArgPropType>(
  "children",
  "name",
  "value"
);

export type PlasmicSwitch__OverridesType = {
  root?: p.Flex<"div">;
  toggle?: p.Flex<"div">;
  track?: p.Flex<"div">;
  thumb?: p.Flex<"div">;
  labelContainer?: p.Flex<"div">;
};

export interface DefaultSwitchProps extends p.SwitchProps {}

function PlasmicSwitch__RenderFunc(props: {
  variants: PlasmicSwitch__VariantsArgs;
  args: PlasmicSwitch__ArgsType;
  overrides: PlasmicSwitch__OverridesType;
  dataFetches?: PlasmicSwitch__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const [isRootFocusVisibleWithin, triggerRootFocusVisibleWithinProps] =
    useTrigger("useFocusVisibleWithin", {
      isTextInput: false
    });

  const triggers = {
    focusVisibleWithin_root: isRootFocusVisibleWithin
  };

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root_____focusVisibleWithin]: triggers.focusVisibleWithin_root,
        [sty.root__isChecked]: hasVariant(variants, "isChecked", "isChecked"),
        [sty.root__isDisabled]: hasVariant(
          variants,
          "isDisabled",
          "isDisabled"
        ),
        [sty.root__noLabel]: hasVariant(variants, "noLabel", "noLabel")
      })}
      data-plasmic-trigger-props={[triggerRootFocusVisibleWithinProps]}
    >
      <div
        data-plasmic-name={"toggle"}
        data-plasmic-override={overrides.toggle}
        className={classNames(defaultcss.all, sty.toggle, {
          [sty.toggle_____focusVisibleWithin]: triggers.focusVisibleWithin_root,
          [sty.toggle__isChecked]: hasVariant(
            variants,
            "isChecked",
            "isChecked"
          ),
          [sty.toggle__isDisabled]: hasVariant(
            variants,
            "isDisabled",
            "isDisabled"
          )
        })}
      >
        <div
          data-plasmic-name={"track"}
          data-plasmic-override={overrides.track}
          className={classNames(defaultcss.all, sty.track, {
            [sty.track_____focusVisibleWithin]:
              triggers.focusVisibleWithin_root,
            [sty.track__isChecked]: hasVariant(
              variants,
              "isChecked",
              "isChecked"
            )
          })}
        />

        <div
          data-plasmic-name={"thumb"}
          data-plasmic-override={overrides.thumb}
          className={classNames(defaultcss.all, sty.thumb, {
            [sty.thumb_____focusVisibleWithin]:
              triggers.focusVisibleWithin_root,
            [sty.thumb__isChecked]: hasVariant(
              variants,
              "isChecked",
              "isChecked"
            )
          })}
        />
      </div>

      {(hasVariant(variants, "noLabel", "noLabel") ? false : true) ? (
        <div
          data-plasmic-name={"labelContainer"}
          data-plasmic-override={overrides.labelContainer}
          className={classNames(defaultcss.all, sty.labelContainer, {
            [sty.labelContainer_____focusVisibleWithin]:
              triggers.focusVisibleWithin_root,
            [sty.labelContainer__noLabel]: hasVariant(
              variants,
              "noLabel",
              "noLabel"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Enter some text",
            value: args.children,
            className: classNames(sty.slotChildren, {
              [sty.slotChildren_____focusVisibleWithin]:
                triggers.focusVisibleWithin_root,
              [sty.slotChildren__noLabel]: hasVariant(
                variants,
                "noLabel",
                "noLabel"
              )
            })
          })}
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

function useBehavior<P extends p.SwitchProps>(props: P, ref: p.SwitchRef) {
  if (!("children" in props)) {
    props = {
      ...props,
      children: "Enter some text"
    };
  }

  return p.useSwitch<P, typeof PlasmicSwitch>(
    PlasmicSwitch,
    props,
    {
      isCheckedVariant: { group: "isChecked", variant: "isChecked" },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      noLabelVariant: { group: "noLabel", variant: "noLabel" },
      labelSlot: "children",
      root: "root"
    },

    ref
  );
}

const PlasmicDescendants = {
  root: ["root", "toggle", "track", "thumb", "labelContainer"],
  toggle: ["toggle", "track", "thumb"],
  track: ["track"],
  thumb: ["thumb"],
  labelContainer: ["labelContainer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  toggle: "div";
  track: "div";
  thumb: "div";
  labelContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSwitch__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSwitch__VariantsArgs;
    args?: PlasmicSwitch__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicSwitch__Fetches;
  } & Omit<PlasmicSwitch__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSwitch__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSwitch__ArgProps,
      internalVariantPropNames: PlasmicSwitch__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicSwitch__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSwitch";
  } else {
    func.displayName = `PlasmicSwitch.${nodeName}`;
  }
  return func;
}

export const PlasmicSwitch = Object.assign(
  // Top-level PlasmicSwitch renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    toggle: makeNodeComponent("toggle"),
    track: makeNodeComponent("track"),
    thumb: makeNodeComponent("thumb"),
    labelContainer: makeNodeComponent("labelContainer"),

    // Metadata about props expected for PlasmicSwitch
    internalVariantProps: PlasmicSwitch__VariantProps,
    internalArgProps: PlasmicSwitch__ArgProps,

    useBehavior
  }
);

export default PlasmicSwitch;
/* prettier-ignore-end */
