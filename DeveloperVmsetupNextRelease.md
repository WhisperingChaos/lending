* Re-enable Chrome setting to permit background tasks to run when Chrome is closed.  Needed in order to run Eclipse debugger.

###  Install Docker Runtime File System
  * Purpose:  Docker's disk needs to support image/container storage can be wildly variable therefore a separate file system container for Docker artifacts permits focused management of this resource.  This file system configuration easily supports swapping Docker's runtime storage (registry).
  * Install Instructions:
    * qemu-img create -f raw SDT-<developerName>-Docker.img 25G
    * associate image to specific developer's VM
      * VIRTIO, Cache Mode: None, Storage format: raw
    * restart the VM
    * start terminal session in VM
    * format the disk: fdisk /dev/vdc
      * n - new partition
      * p - create primary partition
      * 1 - parition number 
      * 2048 - first sector
      * default to allocate all last sector
      * 64 heads & 32 sectors/track
      * w - write parition table
    * format drive: mkfs.ext4 /dev/vdc1
    * update /etc/fstab with entry:/dev/vdc1 /home/secure/Desktop/.dockerRuntime   ext4	errors=remount-ro 0	1
