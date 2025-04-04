if(NOT TARGET fbjni::fbjni)
add_library(fbjni::fbjni SHARED IMPORTED)
set_target_properties(fbjni::fbjni PROPERTIES
    IMPORTED_LOCATION "/Users/user/.gradle/caches/8.13/transforms/a8e88a14a0dd6f3668b052e7849a9be4/transformed/fbjni-0.6.0/prefab/modules/fbjni/libs/android.x86_64/libfbjni.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/user/.gradle/caches/8.13/transforms/a8e88a14a0dd6f3668b052e7849a9be4/transformed/fbjni-0.6.0/prefab/modules/fbjni/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

