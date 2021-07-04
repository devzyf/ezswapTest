// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: cMaVBwcHAKAbUiZW5BBnSf
// Component: 5s3e59b0eE9
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
import * as sty from "./PlasmicCheckbox.module.css"; // plasmic-import: 5s3e59b0eE9/css

import CheckIcon from "./icons/PlasmicIcon__Check"; // plasmic-import: mU9o3tCmIdm/icon
import IndeterminateIcon from "./icons/PlasmicIcon__Indeterminate"; // plasmic-import: yayIKaGxSA-/icon

export type PlasmicCheckbox__VariantMembers = {
  noLabel: "noLabel";
  isDisabled: "isDisabled";
  isChecked: "isChecked";
  isIndeterminate: "isIndeterminate";
};

export type PlasmicCheckbox__VariantsArgs = {
  noLabel?: SingleBooleanChoiceArg<"noLabel">;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
  isChecked?: SingleBooleanChoiceArg<"isChecked">;
  isIndeterminate?: SingleBooleanChoiceArg<"isIndeterminate">;
};

type VariantPropType = keyof PlasmicCheckbox__VariantsArgs;
export const PlasmicCheckbox__VariantProps = new Array<VariantPropType>(
  "noLabel",
  "isDisabled",
  "isChecked",
  "isIndeterminate"
);

export type PlasmicCheckbox__ArgsType = {
  children?: React.ReactNode;
  name?: string;
  value?: string;
};

type ArgPropType = keyof PlasmicCheckbox__ArgsType;
export const PlasmicCheckbox__ArgProps = new Array<ArgPropType>(
  "children",
  "name",
  "value"
);

export type PlasmicCheckbox__OverridesType = {
  root?: p.Flex<"div">;
  box?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
  labelContainer?: p.Flex<"div">;
};

export interface DefaultCheckboxProps extends p.CheckboxProps {}

function PlasmicCheckbox__RenderFunc(props: {
  variants: PlasmicCheckbox__VariantsArgs;
  args: PlasmicCheckbox__ArgsType;
  overrides: PlasmicCheckbox__OverridesType;
  dataFetches?: PlasmicCheckbox__Fetches;
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
        [sty.root__isIndeterminate]: hasVariant(
          variants,
          "isIndeterminate",
          "isIndeterminate"
        ),
        [sty.root__noLabel]: hasVariant(variants, "noLabel", "noLabel")
      })}
      data-plasmic-trigger-props={[triggerRootFocusVisibleWithinProps]}
    >
      <div
        data-plasmic-name={"box"}
        data-plasmic-override={overrides.box}
        className={classNames(defaultcss.all, sty.box, {
          [sty.box_____focusVisibleWithin]: triggers.focusVisibleWithin_root,
          [sty.box__isChecked]: hasVariant(variants, "isChecked", "isChecked"),
          [sty.box__isDisabled]: hasVariant(
            variants,
            "isDisabled",
            "isDisabled"
          ),
          [sty.box__isIndeterminate]: hasVariant(
            variants,
            "isIndeterminate",
            "isIndeterminate"
          )
        })}
      >
        {(
          hasVariant(variants, "isIndeterminate", "isIndeterminate")
            ? true
            : hasVariant(variants, "isChecked", "isChecked")
            ? true
            : true
        ) ? (
          <p.PlasmicIcon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            PlasmicIconType={
              hasVariant(variants, "isIndeterminate", "isIndeterminate")
                ? IndeterminateIcon
                : CheckIcon
            }
            className={classNames(defaultcss.all, sty.svg, {
              [sty.svg_____focusVisibleWithin]:
                triggers.focusVisibleWithin_root,
              [sty.svg__isChecked]: hasVariant(
                variants,
                "isChecked",
                "isChecked"
              ),
              [sty.svg__isIndeterminate]: hasVariant(
                variants,
                "isIndeterminate",
                "isIndeterminate"
              ),
              [sty.svg__noLabel]: hasVariant(variants, "noLabel", "noLabel")
            })}
            role={"img"}
          />
        ) : null}
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

function useBehavior<P extends p.CheckboxProps>(props: P, ref: p.CheckboxRef) {
  if (!("children" in props)) {
    props = {
      ...props,
      children: "Enter some text"
    };
  }

  return p.useCheckbox<P, typeof PlasmicCheckbox>(
    PlasmicCheckbox,
    props,
    {
      isCheckedVariant: { group: "isChecked", variant: "isChecked" },
      isIndeterminateVariant: {
        group: "isIndeterminate",
        variant: "isIndeterminate"
      },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      noLabelVariant: { group: "noLabel", variant: "noLabel" },
      labelSlot: "children",
      root: "root"
    },

    ref
  );
}

const PlasmicDescendants = {
  root: ["root", "box", "svg", "labelContainer"],
  box: ["box", "svg"],
  svg: ["svg"],
  labelContainer: ["labelContainer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  box: "div";
  svg: "svg";
  labelContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCheckbox__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCheckbox__VariantsArgs;
    args?: PlasmicCheckbox__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicCheckbox__Fetches;
  } & Omit<PlasmicCheckbox__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCheckbox__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicCheckbox__ArgProps,
      internalVariantPropNames: PlasmicCheckbox__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicCheckbox__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCheckbox";
  } else {
    func.displayName = `PlasmicCheckbox.${nodeName}`;
  }
  return func;
}

export const PlasmicCheckbox = Object.assign(
  // Top-level PlasmicCheckbox renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    box: makeNodeComponent("box"),
    svg: makeNodeComponent("svg"),
    labelContainer: makeNodeComponent("labelContainer"),

    // Metadata about props expected for PlasmicCheckbox
    internalVariantProps: PlasmicCheckbox__VariantProps,
    internalArgProps: PlasmicCheckbox__ArgProps,

    useBehavior
  }
);

export default PlasmicCheckbox;
/* prettier-ignore-end */
