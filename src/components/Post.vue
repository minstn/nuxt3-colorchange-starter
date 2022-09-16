<script setup lang="ts">
const pageLoaded = ref(false)

onMounted(async (): Promise<any> => {
  pageLoaded.value = true
})
</script>

<template>
  <div class="relative overflow-hidden py-16">
    <Shapes v-if="pageLoaded" />
    <div class="relative px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-prose text-lg">
        <h1>
          <span class="block text-center text-lg font-semibold">Introducing</span>
          <span
            class="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight sm:text-4xl"
          >BionX D500 eBike motor</span>
        </h1>
        <p class="mt-8 text-xl leading-8">
          BionX introduced D500 motors back in 2015/2016, this top of the line 500 watt electric motor focuses on acceleration and low end torque for climbing.
        </p>
      </div>
      <div class="prose prose-lg mx-auto mt-6">
        <p>
          The motor itself is contained inside a plastic composite shell that is thinner than other BionX kits but has a larger
          diameter. This is because the magnets are distributed further out from the axle to provide more torque through
          mechanical advantage. The magnets and drive system on the <strong>D-Series</strong> don’t mount to the shell at all, they are built onto
          an aluminum wheel attached with four spokes that meet at the axle (this is where the torque sensor lives). In addition
          to improved low end torque for accelerating and climbing, this narrow design provides more room for a cassette in the
          rear. It’s ideal for hardtail mountain bikes that need power and gears to really perform as well as responsive power
          that will start and stop quickly. Another interesting quality of this design is that the wheel containing the motor is
          center-spoked meaning the spokes are setup like a normal bicycle wheel vs. connecting to the hub motor itself. This
          provides more flex and give when riding, it feels comfortable and is easier on the rim and tires when going over bumps.
        </p>
        <ul role="list">
          <li>Top of the line 500 watt electric bike kit with a focus on acceleration and low end torque for climbing</li>
          <li>
            Unique center-spoked design for improved comfort and wheel durability, narrow casing accommodates a larger cassette for
            wide range of pedaling gears
          </li>
          <li>Offers regenerative braking and four levels of pedal assist and regen mode (for exercise or descending)</li>
          <li>
            Larger visual footprint with wide diameter, experiences some cogging due to direct-drive setup, increased unsprung
            weight
          </li>
        </ul>

        <h2>eBike wheel details</h2>
        <p>
          The motor itself is contained inside a plastic composite shell that is thinner than other BionX kits but has a larger
          diameter. This is because the magnets are distributed further out from the axle to provide more torque through
          mechanical advantage. The magnets and drive system on the D-Series don’t mount to the shell at all, they are built
          onto an aluminum wheel attached with four spokes that meet at the axle (this is where the torque sensor lives).
        </p>
        <p>
          Multiple Wheel Sizes are available (700c, 650b 27.5", with 26" Planned). Motor mounts to internal metal spokes not
          the plastic Casing.
        </p>
        <blockquote>
          <p>
            <strong>D-Motor</strong> locks itself for
            security when display is removed.
          </p>
        </blockquote>

        <figure>
          <img
            class="w-full rounded-lg"
            src="https://images.unsplash.com/photo-1663171878246-77aa073ed35e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1024&amp;q=70"
            alt="" width="1310" height="873"
          >
          <figcaption>BionX D500 45km/h eBike motor with Continental GrandPrix tire</figcaption>
        </figure>
        <h2>What's more for BionX D500 motor?</h2>
        <p>
          In addition to improved low end torque for accelerating and climbing, this narrow design provides more room for a
          cassette in the rear. It’s ideal for hardtail mountain bikes that need power and gears to really perform as well as
          responsive power that will start and stop quickly. Another interesting quality of this design is that the wheel
          containing the motor is center-spoked meaning the spokes are setup like a normal bicycle wheel vs. connecting to the hub
          motor itself. This provides more flex and give when riding, it feels comfortable and is easier on the rim and tires when
          going over bumps.
        </p>
        <p>
          Disc brake compatible (narrow hub motor design accommodates larger cassettes as well)
          Very quiet thanks to the gearless design and sound dampening system (quieter than most mid-drives)
          Unique center-spoked design dampens vibration and absorbes shock to improve ride quality and reduce wheel/tire
          maintenance
          Excellent low-end torque for starting and climbing thanks to wider hub motor design
          Offers regenerative braking as well as four levels of regen mode and four assist levels
        </p>
      </div>
    </div>
  </div>
</template>

